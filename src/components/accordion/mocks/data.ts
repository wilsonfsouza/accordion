export const faqs = [
  {
    id: "data-0",
    heading: "Create React App",
    content: "<ul><li>Create a basic, new React application.</li><li>Use any framework or build tool you would like (create-react-app, Vite, Next.js, etc).</li></ul>"
  },
  {
    id: "data-1",
    heading: "Create functional react Accordion",
    content: "<ul><li>Create a new functional React 'Accordion' component that displays child components as sections.</li><li>Each section will be hidden by default with a title that is shown at all times.</li><li>If the title is clicked on, the section and its contents will toggle between being hidden and showing.</li></ul>"
  },
  {
    id: "data-2",
    heading: "Make the component reusable and modular",
    content: "<ul><li>The component should be fully reusable and modular so it can take in a dynamic amount of children.</li></ul>"
  },
  {
    id: "data-3",
    heading: "Only one Section Open",
    content: "<ul><li>Only one section inside the Accordion should be opened at a time.</li><li>If the user opens a new section, the previous one will close.</li></ul>"
  },
  {
    id: "data-4",
    heading: "Use the component",
    content: "<ul><li>Use the new component you created and take each bullet point within these directions and use them as the sections inside the Accordion.</li><li>The main bullet should be the title with each of the sub-bullet points being the contents.</li></ul>"
  },
  {
    id: "data-5",
    heading: "Make it look nice",
    content: "<ul><li>(extra) Add additional styling and animations to your component to show off your design skills.</li></ul>"
  }
]

export type IAccordion = typeof faqs[0]
