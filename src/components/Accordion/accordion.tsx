import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is siNUsoid?</AccordionTrigger>
        <AccordionContent>
        siNUsoid: Where technology, tradition, and charity converge. A transformative tech festival that nurtures young minds, instilling the power of technology at the right age and time. It's a beacon of hope, fostering personal growth and embracing change.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What types of events and competitions can participants expect?</AccordionTrigger>
        <AccordionContent>
        Participants can expect robotics challenges, hackathons, coding competitions, paper presentations, quizzes, workshops, and keynote sessions by industry experts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Will there be opportunities to interact with industry professionals during the technical fest?</AccordionTrigger>
        <AccordionContent>
        Yes, the fest provides networking opportunities with guest speakers, industry representatives, and successful alumni.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
