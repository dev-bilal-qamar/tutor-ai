"use client";

import { useEffect, useRef, useState } from "react";
import { SectionReveal } from "@/components/sections/SectionReveal";

const stats = [
  { end: 10000, suffix: "+", label: "Students Using the App", format: "comma" },
  { end: 5, suffix: "+", label: "UK Exam Boards Covered", format: "plain" },
  {
    end: 70,
    suffix: "%",
    label: "% Average Grade Improvement",
    format: "plain",
  },
] as const;

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <SectionReveal className="space-y-10">
        <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
          Built for UK Exam Boards. Powered by AI.
        </h2>
        <p className="max-w-5xl text-base leading-8 text-[#D2CFD7] sm:text-lg">
          We built this because private tutoring costs £96/month. Every student
          deserves expert-level feedback — not just those who can afford it. Our
          AI understands AQA, Edexcel, OCR and WJEC marking schemes so your
          practice actually prepares you for the real exam.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#FFFFFF1C] bg-[#1E0E38]/70 p-6"
            >
              <p className="text-4xl font-semibold text-white sm:text-5xl">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  format={stat.format}
                />
              </p>
              <p className="mt-3 text-sm text-[#D2CFD7] sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

type CountUpProps = {
  end: number;
  suffix: string;
  format: "plain" | "comma";
};

function CountUp({ end, suffix, format }: CountUpProps) {
  const [value, setValue] = useState(0);
  const [runId, setRunId] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setValue(0);
          setRunId((prev) => prev + 1);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (runId === 0) return;

    const duration = 2000;
    const start = performance.now();
    let animationFrame = 0;

    const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, runId]);

  const text =
    format === "comma" ? value.toLocaleString("en-GB") : value.toString();

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}
