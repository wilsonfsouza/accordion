"use client"

import { ChevronDownIcon } from "lucide-react"
import { HTMLAttributes, ReactNode } from "react"
import { useAccordion } from "./contexts/AccordionContext"
import { useAccordionItem } from "./contexts/AccordionItemContext"

interface AccordionTrigger extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h3' | 'h4'
  children: ReactNode
}

export const AccordionTrigger = ({ as = 'h3', children, ...rest }: AccordionTrigger) => {
  const { handleToggleAccordion } = useAccordion()
  const { dataState, index, isOpen } = useAccordionItem()

  if (as === 'h4') {
    return (
      <h4 id={`accordion-trigger-${index}`} {...rest}>
        <button
          type="button"
          className="gap-2 w-full flex flex-1 items-center justify-between py-4 text-sm text-left font-medium transition-all hover:underline [&[aria-expanded=true]>svg]:rotate-180"
          onClick={() => handleToggleAccordion(index)}
          data-state={dataState}
          data-target={`#accordion-content-${index}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${index}`}
        >
          {children}
          <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 shrink-0 text-muted-foreground" />
        </button>
      </h4>
    )
  }

  return (
    <h3 id={`accordion-trigger-${index}`} {...rest}>
      <button
        type="button"
        className="gap-2 w-full flex flex-1 items-center justify-between py-4 text-base md:text-lg text-left font-medium transition-all hover:text-pink-500 [&[aria-expanded=true]>svg]:rotate-180 [&[aria-expanded=true]]:text-pink-500"
        onClick={() => handleToggleAccordion(index)}
        data-target={`#accordion-content-${index}`}
        data-state={dataState}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        {children}
        <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 shrink-0 text-muted-foreground" />
      </button>
    </h3>
  )
}

AccordionTrigger.displayName = "AccordionTrigger"
