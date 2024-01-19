"use client"

import { ReactNode } from "react"
import { useAccordionItem } from "./contexts/AccordionItemContext"

interface AccordionContent {
  children: ReactNode
}

export const AccordionContent = ({children}: AccordionContent) => {
  const { index, isOpen, dataState } = useAccordionItem()

  return (
    <div
      id={`accordion-content-${index}`}
      aria-hidden={!isOpen}
      aria-labelledby={`accordion-trigger-${index}`}
      data-state={dataState}
      className="px-2 overflow-hidden text-sm md:text-base leading-6 md:leading-7 text-slate-100 data-[state=closed]:h-0 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    >
      <div className="pt-0 pb-4">{children}</div>
    </div>
  )
}

AccordionContent.displayName = "AccordionContent"
