import type { Meta, StoryObj } from '@storybook/react';
import { AccordionContent } from '../../components/accordion/AccordionContent';
import { AccordionItem } from '../../components/accordion/AccordionItem';
import { AccordionRoot, AccordionRootProps } from '../../components/accordion/AccordionRoot';
import { AccordionTrigger } from '../../components/accordion/AccordionTrigger';
import { faqs } from '../../components/accordion/mocks/data';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Accordion/Single Panel',
  component: AccordionRoot,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    theme: {
      themeOverride: 'dark',
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: "Use Accordion sub components (`<AccordionItem />`, `<AccordionTrigger />`, and `<AccordionContent />`) to create each accordion **within** an accordion group.",
      control: {
        type: null,
      },
    },
    defaultIndex: {
      description: "Use this field to set the index of the accordion you want to start always **open**. This field is a combination of `item-<number>`.",
      type: "string"
    }
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col items-center justify-center w-full p-10">
          {Story()}
        </div>
      )
    }
  ],
  args: {
    children: (
      <AccordionItem index="item-0">
        <AccordionTrigger>
          {faqs[0].heading}
        </AccordionTrigger>
        <AccordionContent>
          <div
            contentEditable="false"
            dangerouslySetInnerHTML={{__html: faqs[0].content}}
            className="ml-4 [&>ul]:list-circle"
          />
        </AccordionContent>
      </AccordionItem>
    )
  }
} satisfies Meta<AccordionRootProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AccordionStartsClosed: Story = {};

export const AccordionStartsOpened: Story = {
  args: {
    defaultIndex: "item-0"
  },
};
