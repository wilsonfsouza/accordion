"use client"

import { createContext, useContext } from "react";

interface AccordionItemContextData {
  dataState: "open" | "closed"
  index: string
  isOpen: boolean
}

export const AccordionItemContext = createContext({} as AccordionItemContextData)

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext)

  if (!context) {
    console.error("useAccordionItem must be used within AccordionItemContext")
  }

  return context
}