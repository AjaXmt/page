"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useCampaign } from "@/contexts/CampaignContext"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Share2, FileText, Image } from "lucide-react"
import { formatPlayerName } from "@/lib/utils"
import { ShareDataDialog } from "@/components/share-data-dialog"
import dynamic from "next/dynamic"

// Dynamically import jsPDF to avoid SSR issues
const jsPDF = dynamic(() => import("jspdf"), { ssr: false })
const autoTable = dynamic(() => import("jspdf-autotable"), { ssr: false })
// Dynamically import html2canvas to avoid SSR issues
const html2canvas = dynamic(() => import("html2canvas"), { ssr: false })

type BattleResult = {
  id: number
  player1: string
  player2: string
  winner: "player1" | "player2" | "draw"
  player1VP: number
  player2VP: number
  hasReport: boolean
  reportLink?: string
  scenario: string
}

type PlayerStats = {
  name: string
  army: string
  kp: number
  battlesPlayed: number
  vpGained: number
  vpLost: number
  points: number
}

export default function TablePage() {
  // Use useRef to track if this is the first render
  const isInitialMount = useRef(true)
  const tableRef = useRef<HTMLDivElement>(null)
  const { entries } = useCampaign()
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([])
  const [sortConfig, setSortConfig] = useState<{ key: keyof PlayerStats; direction: "ascending" | "descending" }>({
    key: "points",
    direction: "descending",
  })
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const [battleResults, setBattleResults] = useState<BattleResult[]>([])

  // Load battle results only once on initial mount
  useEffect(() => {
    if (!isInitialMount.current) return

    try {
      const battleResultsString = localStorage.getItem("battleResults") || "[]"
      const parsedResults = JSON.parse(battleResultsString)
      setBattleResults(parsedResults)
    } catch (error) {
      console.error("Error loading battle results:", error)
    }

    isInitialMount.current = false
  }, [])

  // Calculate player stats when entries or battle results change
  useEffect(() => {
    const stats = entries.map((player) => {
      const playerBattles = battleResults.filter(
        (battle) => battle.player1 === player.player || battle.player2 === player.player,
      )

      let vpGained = 0
      let vpLost = 0
      let points = 0

      playerBattles.forEach((battle) => {
        if (battle.player1 === player.player) {
          vpGained += battle.player1VP
          vpLost += battle.player2VP
          if (battle.winner === "player1") points += 2
          else if (battle.winner === "draw") points += 1
        } else {
          vpGained += battle.player2VP
          vpLost += battle.player1VP
          if (battle.winner === "player2") points += 2
          else if (battle.winner === "draw") points += 1
        }
      })

      return {
        name: player.player,
        army: player.army,
        kp: player.kp,
        battlesPlayed: playerBattles.length,
        vpGained,
        vpLost,
        points: points,
      }
    })

    // Sort the stats based on the current sort configuration
    const sortedStats = [...stats].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1
      return 0
    })

    setPlayerStats(sortedStats)
  }, [entries, battleResults, sortConfig])

  // Handle sorting data
  const sortData = useCallback((key: keyof PlayerStats) => {
    setSortConfig((prevConfig) => {
      let direction: "ascending" | "descending" = "ascending"
      if (prevConfig.key === key && prevConfig.direction === "ascending") {
        direction = "descending"
      }
      return { key, direction }
    })
  }, [])

  // Handle exporting as JPG
  const exportAsJPG = useCallback(async () => {
    if (!tableRef.current) {
      alert("Nie można znaleźć tabeli do eksportu")
      return
    }

    try {
      // Dynamically import html2canvas
      const html2canvasModule = await import("html2canvas")
      const html2canvas = html2canvasModule.default

      // Create a title element to include in the image
      const titleContainer = document.createElement("div")
      titleContainer.style.padding = "20px"
      titleContainer.style.backgroundColor = "#f5f0e6"
      titleContainer.style.fontFamily = "Arial, sans-serif"

      const title = document.createElement("h2")
      title.textContent = "Poznańska Kampania Old World - Tabela Wyników"
      title.style.fontSize = "20px"
      title.style.fontWeight = "bold"
      title.style.marginBottom = "10px"
      title.style.color = "#8B0000"

      const date = document.createElement("p")
      date.textContent = `Wygenerowano: ${new Date().toLocaleDateString("pl-PL")}`
      date.style.fontSize = "12px"

      titleContainer.appendChild(title)
      titleContainer.appendChild(date)

      // Create a container for the entire content
      const container = document.createElement("div")
      container.style.backgroundColor = "#f5f0e6"
      container.style.padding = "20px"
      container.style.borderRadius = "8px"
      container.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"

      // Clone the table to avoid modifying the original
      const tableClone = tableRef.current.cloneNode(true) as HTMLElement

      // Remove sort buttons from the header
      const headerButtons = tableClone.querySelectorAll("thead button")
      headerButtons.forEach((button) => {
        const text = button.textContent?.trim().split(" ")[0] || ""
        button.innerHTML = text
      })

      // Append elements to container
      container.appendChild(titleContainer)
      container.appendChild(tableClone)

      // Temporarily add to document to render
      document.body.appendChild(container)

      // Convert to canvas
      const canvas = await html2canvas(container, {
        backgroundColor: "#f5f0e6",
        scale: 2, // Higher resolution
        logging: false,
        useCORS: true,
      })

      // Remove temporary elements
      document.body.removeChild(container)

      // Convert canvas to JPG and download
      const jpgUrl = canvas.toDataURL("image/jpeg", 0.9)
      const link = document.createElement("a")
      link.href = jpgUrl
      link.download = "kampania-tabela.jpg"
      link.click()
    } catch (error) {
      console.error("Error generating JPG:", error)
      alert("Wystąpił błąd podczas generowania obrazu JPG")
    }
  }, [])

  // Handle exporting as PDF
  const exportAsPDF = useCallback(async () => {
    try {
      // Dynamically import jsPDF and jspdf-autotable
      const jsPDFModule = await import("jspdf")
      const autoTableModule = await import("jspdf-autotable")

      const jsPDF = jsPDFModule.default
      const autoTable = autoTableModule.default

      // Create a new PDF document with support for Polish characters
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
        compress: true,
      })

      // Add title
      doc.setFont("helvetica", "bold")
      doc.setFontSize(16)
      doc.text("Poznańska Kampania Old World - Tabela Wyników", 14, 22)

      // Add date
      const today = new Date()
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text(`Wygenerowano: ${today.toLocaleDateString("pl-PL")}`, 14, 30)

      // Helper function to truncate text
      const truncateText = (text: string, maxLength: number) => {
        if (!text) return ""
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
      }

      // Prepare data for the table with truncated names
      const tableData = playerStats.map((player) => [
        truncateText(formatPlayerName(player.name), 12),
        truncateText(player.army, 15),
        player.kp,
        player.battlesPlayed,
        player.vpGained,
        player.vpLost,
        player.points,
      ])

      // Add the table with Polish language support
      autoTable(doc, {
        head: [["Gracz", "Armia", "KP", "Bitwy", "Zdobyte VP", "Stracone VP", "Punkty"]],
        body: tableData,
        startY: 35,
        styles: {
          fontSize: 8,
          cellPadding: 2,
          font: "helvetica",
        },
        headStyles: {
          fillColor: [139, 0, 0],
          textColor: [255, 255, 255],
          fontStyle: "bold",
        },
        alternateRowStyles: { fillColor: [245, 240, 230] },
        // Ensure proper encoding for Polish characters
        didDrawCell: (data) => {
          // This helps with rendering special characters
        },
      })

      // Save the PDF with Polish-friendly name
      doc.save("kampania-tabela.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Wystąpił błąd podczas generowania PDF")
    }
  }, [playerStats])

  // Toggle share dialog
  const toggleShareDialog = useCallback(() => {
    setIsShareDialogOpen((prev) => !prev)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tabela Wyników</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={exportAsPDF}>
            <FileText className="h-4 w-4" />
            Eksportuj jako PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={exportAsJPG}>
            <Image className="h-4 w-4" />
            Eksportuj jako JPG
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={toggleShareDialog}>
            <Share2 className="h-4 w-4" />
            Udostępnij
          </Button>
        </div>
      </div>
      <div ref={tableRef}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <Button variant="ghost" onClick={() => sortData("name")}>
                  Imię i Nazwisko <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => sortData("army")}>
                  Nazwa Armii <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => sortData("kp")}>
                  KP <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => sortData("battlesPlayed")}>
                  Liczba Bitew <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => sortData("vpGained")}>
                  Zdobyte VP <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => sortData("vpLost")}>
                  Stracone VP <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => sortData("points")}>
                  Liczba Punktów <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {playerStats.map((player) => (
              <TableRow key={player.name}>
                <TableCell className="font-medium">{formatPlayerName(player.name)}</TableCell>
                <TableCell>{player.army}</TableCell>
                <TableCell>{player.kp}</TableCell>
                <TableCell>{player.battlesPlayed}</TableCell>
                <TableCell>{player.vpGained}</TableCell>
                <TableCell>{player.vpLost}</TableCell>
                <TableCell>{player.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {isShareDialogOpen && (
        <ShareDataDialog
          isOpen={isShareDialogOpen}
          onClose={() => setIsShareDialogOpen(false)}
          data={playerStats}
          title="Tabela"
          description="Udostępnij tabelę wyników innym graczom"
        />
      )}
    </div>
  )
}

