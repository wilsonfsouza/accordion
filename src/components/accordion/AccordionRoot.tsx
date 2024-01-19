"use client"

import { ReactNode, useCallback, useState } from "react"
import { AccordionContext } from "./contexts/AccordionContext"

interface AccordionRoot {
  children: ReactNode
  defaultIndex?: string
}

export const AccordionRoot  = ({ children, defaultIndex = "" }: AccordionRoot) => {
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
