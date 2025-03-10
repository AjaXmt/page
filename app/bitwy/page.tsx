"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { AddBattleResult } from "@/components/add-battle-result"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCampaign } from "@/contexts/CampaignContext"
import { Pencil, Trash2, Download, Upload, Share2, Image } from "lucide-react"
import { formatPlayerName } from "@/lib/utils"
import { ShareDataDialog } from "@/components/share-data-dialog"
import { useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"

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

export default function BattlesPage() {
  // Use useRef to track if this is the first render
  const isInitialMount = useRef(true)
  const tableRef = useRef<HTMLDivElement>(null)
  const [battleResults, setBattleResults] = useState<BattleResult[]>([])
  const [editingBattleId, setEditingBattleId] = useState<number | null>(null)
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const { entries } = useCampaign()
  const searchParams = useSearchParams()

  // Load data only once on initial mount
  useEffect(() => {
    if (!isInitialMount.current) return

    // Check for shared data in URL
    const sharedData = searchParams.get("data")
    if (sharedData) {
      try {
        const decodedData = atob(sharedData)
        const parsedData = JSON.parse(decodedData)
        if (Array.isArray(parsedData)) {
          setBattleResults(parsedData)
          localStorage.setItem("battleResults", JSON.stringify(parsedData))
        }
      } catch (error) {
        console.error("Error parsing shared data:", error)
      }
    } else {
      // Load from localStorage if no shared data
      try {
        const savedBattles = localStorage.getItem("battleResults")
        if (savedBattles) {
          setBattleResults(JSON.parse(savedBattles))
        }
      } catch (error) {
        console.error("Error loading battle results from localStorage:", error)
      }
    }

    isInitialMount.current = false
  }, [searchParams])

  // Memoize the save function to avoid recreating it on every render
  const saveBattleResults = useCallback((results: BattleResult[]) => {
    try {
      localStorage.setItem("battleResults", JSON.stringify(results))
    } catch (error) {
      console.error("Error saving battle results to localStorage:", error)
    }
  }, [])

  // Handle adding a new battle result
  const handleAddResult = useCallback(
    (result: BattleResult) => {
      const newBattle = {
        ...result,
        id: Date.now(),
      }
      setBattleResults((prevResults) => {
        const newResults = [...prevResults, newBattle]
        saveBattleResults(newResults)
        return newResults
      })
    },
    [saveBattleResults],
  )

  // Handle saving results manually
  const handleSaveResults = useCallback(() => {
    saveBattleResults(battleResults)
    alert("Wyniki bitew zostały zapisane!")
  }, [battleResults, saveBattleResults])

  // Handle editing a battle
  const handleEditBattle = useCallback((id: number) => {
    setEditingBattleId(id)
  }, [])

  // Handle updating a battle
  const handleUpdateBattle = useCallback(
    (updatedBattle: BattleResult) => {
      setBattleResults((prevResults) => {
        const newResults = prevResults.map((battle) => (battle.id === updatedBattle.id ? updatedBattle : battle))
        saveBattleResults(newResults)
        return newResults
      })
      setEditingBattleId(null)
    },
    [saveBattleResults],
  )

  // Handle deleting a battle
  const handleDeleteBattle = useCallback(
    (id: number) => {
      setBattleResults((prevResults) => {
        const newResults = prevResults.filter((battle) => battle.id !== id)
        saveBattleResults(newResults)
        return newResults
      })
    },
    [saveBattleResults],
  )

  // Handle exporting battle results
  const exportBattleResults = useCallback(() => {
    const dataStr = JSON.stringify(battleResults)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = "battle-results.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }, [battleResults])

  // Handle importing battle results
  const importBattleResults = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileReader = new FileReader()
      fileReader.readAsText(event.target.files?.[0] as File, "UTF-8")
      fileReader.onload = (e) => {
        const content = e.target?.result as string
        try {
          const parsedData = JSON.parse(content)
          setBattleResults(parsedData)
          saveBattleResults(parsedData)
          alert("Dane zostały zaimportowane pomyślnie!")
        } catch (error) {
          alert("Błąd podczas importowania danych!")
        }
      }
    },
    [saveBattleResults],
  )

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
      title.textContent = "Poznańska Kampania Old World - Wyniki Bitew"
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

      // Hide "Raport" and "Akcje" columns in the cloned table
      const headerCells = tableClone.querySelectorAll("thead th")
      const raportIndex = Array.from(headerCells).findIndex((cell) => cell.textContent === "Raport")
      const akcjeIndex = Array.from(headerCells).findIndex((cell) => cell.textContent === "Akcje")

      if (raportIndex !== -1) {
        // Hide the header cell
        ;(headerCells[raportIndex] as HTMLElement).style.display = "none"

        // Hide all cells in that column
        const rows = tableClone.querySelectorAll("tbody tr")
        rows.forEach((row) => {
          const cells = row.querySelectorAll("td")
          if (cells[raportIndex]) {
            ;(cells[raportIndex] as HTMLElement).style.display = "none"
          }
        })
      }

      if (akcjeIndex !== -1) {
        // Hide the header cell
        ;(headerCells[akcjeIndex] as HTMLElement).style.display = "none"

        // Hide all cells in that column
        const rows = tableClone.querySelectorAll("tbody tr")
        rows.forEach((row) => {
          const cells = row.querySelectorAll("td")
          if (cells[akcjeIndex]) {
            ;(cells[akcjeIndex] as HTMLElement).style.display = "none"
          }
        })
      }

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
      link.download = "kampania-bitwy.jpg"
      link.click()
    } catch (error) {
      console.error("Error generating JPG:", error)
      alert("Wystąpił błąd podczas generowania obrazu JPG")
    }
  }, [])

  // Toggle share dialog
  const toggleShareDialog = useCallback(() => {
    setIsShareDialogOpen((prev) => !prev)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bitwy</h1>
        <Button variant="outline" className="flex items-center gap-2" onClick={toggleShareDialog}>
          <Share2 className="h-4 w-4" />
          Udostępnij
        </Button>
      </div>

      {editingBattleId === null ? (
        <AddBattleResult onAddResult={handleAddResult} />
      ) : (
        <AddBattleResult
          onAddResult={handleUpdateBattle}
          initialBattle={battleResults.find((b) => b.id === editingBattleId)}
        />
      )}
      <div className="rounded-md border" ref={tableRef}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gracz 1</TableHead>
              <TableHead>Gracz 2</TableHead>
              <TableHead>Scenariusz</TableHead>
              <TableHead>Zwycięzca</TableHead>
              <TableHead>VP Gracza 1</TableHead>
              <TableHead>VP Gracza 2</TableHead>
              <TableHead>Raport</TableHead>
              <TableHead>Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {battleResults.map((result) => (
              <TableRow key={result.id}>
                <TableCell>
                  {formatPlayerName(result.player1)}
                  <div className="text-xs text-muted-foreground">
                    {entries.find((entry) => entry.player === result.player1)?.army || ""}
                  </div>
                </TableCell>
                <TableCell>
                  {formatPlayerName(result.player2)}
                  <div className="text-xs text-muted-foreground">
                    {entries.find((entry) => entry.player === result.player2)?.army || ""}
                  </div>
                </TableCell>
                <TableCell>{result.scenario}</TableCell>
                <TableCell>
                  {result.winner === "player1"
                    ? formatPlayerName(result.player1)
                    : result.winner === "player2"
                      ? formatPlayerName(result.player2)
                      : "Remis"}
                </TableCell>
                <TableCell>{result.player1VP}</TableCell>
                <TableCell>{result.player2VP}</TableCell>
                <TableCell>
                  {result.hasReport && result.reportLink ? (
                    <Link href={result.reportLink} target="_blank" className="text-blue-600 hover:underline">
                      Link do raportu
                    </Link>
                  ) : (
                    "Brak"
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditBattle(result.id)}>
                      <Pencil className="h-4 w-4 mr-2" />
                      Edytuj
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteBattle(result.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Usuń
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button onClick={handleSaveResults}>Zapisz</Button>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button onClick={exportBattleResults} variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Eksportuj JSON
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <Upload className="h-4 w-4" />
          Importuj dane
          <input
            id="file-input"
            type="file"
            accept=".json"
            onChange={importBattleResults}
            style={{ display: "none" }}
          />
        </Button>
        <Button onClick={exportAsJPG} variant="outline" className="flex items-center gap-2">
          <Image className="h-4 w-4" />
          Eksportuj jako JPG
        </Button>
      </div>

      {isShareDialogOpen && (
        <ShareDataDialog
          isOpen={isShareDialogOpen}
          onClose={() => setIsShareDialogOpen(false)}
          data={battleResults}
          title="Bitwy"
          description="Udostępnij wyniki bitew innym graczom"
        />
      )}
    </div>
  )
}

