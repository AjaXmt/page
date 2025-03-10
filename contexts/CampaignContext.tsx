"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode, useRef, useEffect } from "react"
import type { CampaignEntry } from "@/types/campaign"

type CampaignContextType = {
  entries: CampaignEntry[]
  setEntries: React.Dispatch<React.SetStateAction<CampaignEntry[]>>
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined)

export function CampaignProvider({
  children,
  initialEntries,
}: { children: ReactNode; initialEntries: CampaignEntry[] }) {
  // Use useRef to track if this is the first render
  const isInitialMount = useRef(true)
  const [entries, setEntries] = useState<CampaignEntry[]>(initialEntries)

  // Only update localStorage after the initial mount
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Save entries to localStorage only when they change after initial mount
    try {
      localStorage.setItem("campaignEntries", JSON.stringify(entries))
    } catch (error) {
      console.error("Failed to save entries to localStorage:", error)
    }
  }, [entries])

  return <CampaignContext.Provider value={{ entries, setEntries }}>{children}</CampaignContext.Provider>
}

export function useCampaign() {
  const context = useContext(CampaignContext)
  if (context === undefined) {
    throw new Error("useCampaign must be used within a CampaignProvider")
  }
  return context
}

