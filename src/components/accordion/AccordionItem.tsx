"use client"

import { ReactNode } from "react"
import { useAccordion } from "./contexts/AccordionContext"
import { AccordionItemContext } from "./contexts/AccordionItemContext"

interface AccordionItem {
  children: ReactNode
  index: string
}

export const AccordionItem = ({ children, index }: AccordionItem) => {
  const { openAccordionIndex } =  useAccordion()
  const isOpen = index === openAccordionIndex
  const dataState = isOpen ? "open" : "closed"

  return (
    <AccordionItemContext.Provider value={{ isOpen, dataState, index }}>
      <div className="border-b border-pink-500">
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

AccordionItem.displayName = "AccordionItem"
