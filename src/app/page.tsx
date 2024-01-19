import { Accordion } from "@/components/accordion/Accordion";
import { faqs } from "@/components/accordion/mocks/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <section className="container mx-auto">
        <Accordion data={faqs} />
      </section>
    </main>
  )
}
