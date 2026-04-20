"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Subject & Exam Board",
    description:
      "Select from GCSE or A-Level subjects matched to AQA, Edexcel, OCR or WJEC — exactly how your exam is structured.",
  },
  {
    number: "02",
    title: "Practice Real Exam-Style Questions",
    description:
      "Hundreds of questions built to match the style, mark allocation, and difficulty of your actual exam paper.",
  },
  {
    number: "03",
    title: "Get Instant AI Feedback & Improve",
    description:
      "Know exactly where you went wrong and what to fix — every single time you practice.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <SectionReveal className="space-y-10">
        <h2 className="text-center text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
          Go from Confused to Confident in 3 Steps
        </h2>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="contents lg:contents">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="flex-1"
              >
                <div className="h-full rounded-2xl border border-[#FFFFFF1C] bg-[#1E0E38]/70 p-6 transition-transform duration-200 hover:-translate-y-1">
                  <p className="text-sm font-semibold tracking-[0.16em] text-[#CDF660]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#D2CFD7] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              {index < steps.length - 1 ? (
                <div className="hidden w-8 shrink-0 items-center justify-center lg:flex">
                  <ArrowRight className="size-5 text-[#8B5CD6]" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
