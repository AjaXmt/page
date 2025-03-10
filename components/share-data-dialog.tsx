"use client"

import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface ShareDataDialogProps {
  isOpen: boolean
  onClose: () => void
  data: any
  title: string
  description: string
}

export function ShareDataDialog({ isOpen, onClose, data, title, description }: ShareDataDialogProps) {
  const [jsonUrl, setJsonUrl] = useState<string>("")
  const [copied, setCopied] = useState(false)

  // Create URL only when dialog is opened
  useEffect(() => {
    let url = ""

    if (isOpen && data) {
      try {
        const jsonBlob = new Blob([JSON.stringify(data)], { type: "application/json" })
        url = URL.createObjectURL(jsonBlob)
        setJsonUrl(url)
      } catch (error) {
        console.error("Error creating JSON URL:", error)
      }
    }

    // Cleanup function to revoke the URL
    return () => {
      if (url) {
        URL.revokeObjectURL(url)
      }
    }
  }, [isOpen, data])

  // Handle copying link
  const handleCopyLink = useCallback(() => {
    try {
      const dataStr = JSON.stringify(data)
      const compressedData = btoa(dataStr)
      const shareUrl = `${window.location.origin}${window.location.pathname}?data=${compressedData}`

      navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Error copying link:", error)
      alert("Wystąpił błąd podczas kopiowania linku")
    }
  }, [data])

  // Handle downloading file
  const handleDownload = useCallback(() => {
    try {
      const dataStr = JSON.stringify(data)
      const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
      const exportFileDefaultName = `warhammer-${title.toLowerCase()}.json`

      const linkElement = document.createElement("a")
      linkElement.setAttribute("href", dataUri)
      linkElement.setAttribute("download", exportFileDefaultName)
      linkElement.click()
    } catch (error) {
      console.error("Error downloading file:", error)
      alert("Wystąpił błąd podczas pobierania pliku")
    }
  }, [data, title])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Udostępnij {title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="qrcode">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="qrcode">Kod QR</TabsTrigger>
            <TabsTrigger value="link">Link</TabsTrigger>
          </TabsList>
          <TabsContent value="qrcode" className="flex justify-center py-4">
            <div className="flex flex-col items-center gap-4">
              {jsonUrl && <QRCodeSVG value={jsonUrl} size={200} level="H" includeMargin={true} />}
              <p className="text-sm text-center text-muted-foreground">Zeskanuj kod QR, aby pobrać dane</p>
            </div>
          </TabsContent>
          <TabsContent value="link" className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Button onClick={handleCopyLink} className="flex items-center gap-2">
                <Copy className="h-4 w-4" />
                {copied ? "Skopiowano!" : "Kopiuj link do udostępnienia"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Link zawiera zakodowane dane, które można otworzyć w przeglądarce
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Pobierz plik JSON
              </Button>
              <p className="text-xs text-muted-foreground">Pobierz plik, który można zaimportować w aplikacji</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

