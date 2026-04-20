"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionReveal } from "@/components/sections/SectionReveal";

const topics = [
  {
    question: "Is the content specific to my exam board?",
    answer:
      "Yes. Every question, note, and mark scheme is aligned to AQA, Edexcel, OCR and WJEC specifications. Nothing generic.",
  },
  {
    question: "How does the AI mark my answers?",
    answer:
      "Our AI uses official mark schemes and assessment objectives — the exact same standards your real examiner uses to grade your paper.",
  },
  {
    question: "Can I try it without paying?",
    answer:
      "Absolutely. No credit card needed. Sign up free and upgrade only when you are ready.",
  },
  {
    question: "Does it cover both GCSE and A-Level?",
    answer:
      "Yes. We cover both levels across all major subjects including Maths, Sciences, Humanities and more.",
  },
  {
    question: "What if I cannot afford the subscription?",
    answer:
      "We run a bursary scheme. Apply and if you qualify you get full free access. No one should be blocked from good education.",
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT does not know your mark scheme. We do. Every question and every mark is built specifically around your exam board — ChatGPT is not.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <SectionReveal className="space-y-10">
        <h2 className="text-center text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
          Questions? Answered.
        </h2>
        <div className="rounded-2xl border border-[#FFFFFF1C] bg-[#1E0E38]/70 p-4 sm:p-6">
          <Accordion defaultValue={[topics[0].question]}>
            {topics.map((topic) => (
              <AccordionItem
                key={topic.question}
                value={topic.question}
                className="border-[#FFFFFF1C]"
              >
                <AccordionTrigger className="px-2 py-4 text-base font-semibold text-white hover:no-underline">
                  {topic.question}
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-5 text-sm text-[#D2CFD7]">
                  {topic.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionReveal>
    </section>
  );
}
