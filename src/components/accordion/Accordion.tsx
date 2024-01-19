import { AccordionContent } from "./AccordionContent"
import { AccordionItem } from "./AccordionItem"
import { AccordionRoot } from "./AccordionRoot"
import { AccordionTrigger } from "./AccordionTrigger"
import { IAccordion } from "./mocks/data"

interface AccordionProps {
  data: IAccordion[]
}

export const Accordion = ({data}: AccordionProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10">
      <AccordionRoot>
        {data.map((item, index) => (
          <AccordionItem key={item.id} index={`item-${index}`}>
            <AccordionTrigger>
              {item.heading}
            </AccordionTrigger>
            <AccordionContent>
              <div
                contentEditable="false"
                dangerouslySetInnerHTML={{__html: item.content}}
                className="ml-4 [&>ul]:list-circle"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  )
}
