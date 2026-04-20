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
    question: "How accurate are the AI solutions?",
    answer:
      "We use specialized models trained specifically on academic curricula. Each step-by-step solution is generated to mirror the mark schemes of major UK exam boards. However, as with any AI tool, we recommend using it to verify your own understanding rather than copying answers blindly.",
  },
  {
    question: "Which exam boards do you support?",
    answer:
      "We currently support AQA, Edexcel, OCR, WJEC, and CCEA. We are constantly expanding our database. If you have a specific requirement, let us know through the Contact page, and we will prioritize it!",
  },
  {
    question: "Is using BoostTutorAI considered cheating?",
    answer:
      "Not if used correctly. We do not just give you the final answer; we provide the process. Think of us as your 24/7 personal tutor. Use BoostTutorAI to break down roadblocks during your revision, not during your actual exam.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, absolutely. We believe in our product, not in locking you into contracts. You can cancel your monthly or annual subscription directly from your dashboard settings, and you will retain access until the end of your billing cycle.",
  },
  {
    question: "What subjects do you currently offer?",
    answer:
      "Currently, we specialize in high-demand STEM subjects: Mathematics, Physics, Chemistry, and Biology. We are rolling out support for more subjects soon-stay tuned!",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <SectionReveal className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-highlight)] uppercase sm:text-sm">
            Have Questions?
          </p>
          <h2 className="text-2xl leading-tight font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto w-full">
          <Accordion defaultValue={[topics[0].question]} className="space-y-4">
            {topics.map((topic) => (
              <AccordionItem
                key={topic.question}
                value={topic.question}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <AccordionTrigger className="px-6 py-5 text-base font-semibold text-foreground hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden group-aria-expanded/accordion-trigger:bg-[var(--color-highlight)] group-aria-expanded/accordion-trigger:text-[var(--color-bg)]">
                  <span className="flex w-full items-center justify-between gap-4">
                    <span>{topic.question}</span>
                    <span className="text-3xl leading-none group-aria-expanded/accordion-trigger:hidden">
                      +
                    </span>
                    <span className="hidden text-3xl leading-none group-aria-expanded/accordion-trigger:inline">
                      -
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="border-t border-border bg-secondary px-6 pb-6 text-base leading-relaxed text-muted-foreground">
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
