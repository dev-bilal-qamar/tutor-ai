"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "1M+", label: "Questions Solved" },
  { value: "10X", label: "Exam Board Support" },
] as const;

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <SectionReveal>
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-[16px] border border-border bg-card shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
              <Image
                src="/about.png"
                alt="About BoostTutorAI section visual"
                width={400}
                height={460}
                className="h-[460px] w-full rounded-[16px] object-cover object-top"
                priority={false}
              />
            </div>

            <div className="pointer-events-none absolute top-5 -left-3 rounded-2xl bg-linear-to-br from-[#8F5BFF] to-[#6F35D8] px-5 py-4 shadow-[0_15px_35px_rgba(116,65,214,0.45)] sm:-left-6 sm:top-8">
              <p className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
                {metrics[0].value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[#EDE2FF] uppercase sm:text-sm">
                {metrics[0].label}
              </p>
            </div>

            <div className="pointer-events-none absolute right-3 bottom-5 rounded-2xl bg-linear-to-br from-[#8F5BFF] to-[#6F35D8] px-5 py-4 shadow-[0_15px_35px_rgba(116,65,214,0.45)] sm:-right-6 sm:bottom-8">
              <p className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
                {metrics[1].value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[#EDE2FF] uppercase sm:text-sm">
                {metrics[1].label}
              </p>
            </div>
          </div>

          <div className="text-left">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-highlight)] uppercase sm:text-sm">
              About BoostTutorAI
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Master Any Exam Question in Seconds.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Traditional tutoring is slow and expensive. BoostTutorAI provides
              instant stepby-step solutions for Maths, Physics, Biology, and
              Chemistry aligned with UK exam boards.
            </p>

            <Button className="btn-primary-gradient mt-8 h-11 rounded-lg px-7 text-xs font-semibold tracking-[0.08em] uppercase sm:h-12">
              See How it Works
            </Button>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
