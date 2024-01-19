"use client"

import { createContext, useContext } from "react";

interface AccordionContextData {
  openAccordionIndex: string
  handleToggleAccordion: (index: string) => void
}

export const AccordionContext = createContext({} as AccordionContextData)

export const useAccordion = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    console.error("useAccordion must be used within AccordionContext")
  }

  return context
}