"use client"

import { ReactNode, useCallback, useState } from "react"
import { AccordionContext } from "./contexts/AccordionContext"

export interface AccordionRootProps {
  children: ReactNode
  defaultIndex?: string
}

export const AccordionRoot  = ({ children, defaultIndex = "" }: AccordionRootProps) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(defaultIndex)

  const handleToggleAccordion = useCallback((index: string) => {
    setOpenAccordionIndex((state) => state === index ? "" : index)
  }, [])

  return (
    <AccordionContext.Provider value={{ openAccordionIndex, handleToggleAccordion }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  )
}

AccordionRoot.displayName = "AccordionRoot"
