"use client"

import { HTMLAttributes, ReactNode } from "react"
import { useAccordion } from "./contexts/AccordionContext"
import { AccordionItemContext } from "./contexts/AccordionItemContext"

interface AccordionItem extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  index: string
}

export const AccordionItem = ({ children, index, ...rest }: AccordionItem) => {
  const { openAccordionIndex } =  useAccordion()
  const isOpen = index === openAccordionIndex
  const dataState = isOpen ? "open" : "closed"

  return (
    <AccordionItemContext.Provider value={{ isOpen, dataState, index }}>
      <div className="border-b border-pink-500" {...rest}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

AccordionItem.displayName = "AccordionItem"
