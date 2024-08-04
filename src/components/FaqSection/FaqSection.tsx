import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CATEGORY, FAQ_DATA } from "./utils";
import React from "react";
import { FaqHeading, FaqSectionHeading } from "./styleComponent";

export const FaqSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <FaqHeading>Frequently Asked Questions</FaqHeading>
      <Accordion type="multiple" className="max-w-6xl w-full">
        {FAQ_CATEGORY.map((category, idx) => (
          <div className="p-4 shadow my-4 rounded-md dark:bg-zinc-900 bg-zinc-100" key={`${category?.category}_${idx}`}>
            <FaqSectionHeading>{category.title}</FaqSectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {FAQ_DATA.filter((faq) => faq.category === category.category).map(
                (faq, idx) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger
                      style={{ textDecoration: "none", textAlign: "left" }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                )
              )}
            </div>
          </div>
        ))}
      </Accordion>
    </div>
  );
};