"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/sections/SectionReveal";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const VIDEO_ID = "M7lc1UVf-VE";

const steps = [
  {
    title: "Snap or Upload",
    description:
      "Upload a photo of your exam question or type the problem directly into the dashboard.",
  },
  {
    title: "Instant Breakdown",
    description:
      "Get a verified, step-by-step solution instantly. We don't just give the answer; we explain the 'why'.",
  },
  {
    title: "Practice & Perfect",
    description:
      "Master the concept with infinite variations of the same question type to guarantee your grade.",
  },
];

export function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <SectionReveal className="space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-highlight)] uppercase sm:text-sm">
            How It Works
          </p>
          <h2 className="text-2xl leading-tight font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Master Any Exam Question in 3 Steps
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card/80 p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] rounded-l-[120px] bg-[radial-gradient(circle_at_center,rgba(120,65,220,0.45),rgba(30,14,56,0))] lg:block" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-highlight)] uppercase sm:text-sm">
                  The BoostTutorAI Flow
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-semibold text-foreground sm:text-3xl lg:text-4xl">
                  From &apos;Stuck&apos; to Solved
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Don&apos;t let a difficult question ruin your revision. Our AI is
                  designed to decode, solve, and teach you the logic behind every
                  problem instantly.
                </p>
              </div>
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                    className="sm:col-span-1"
                  >
                    <p className="flex items-center gap-2 text-base font-semibold leading-none text-foreground">
                      <Check className="size-5 shrink-0 text-[#C9FF54]" />
                      {step.title}
                    </p>

                  </motion.div>
                ))}
              </div>
              <button
                type="button"
                className="btn-primary-gradient mt-8 h-12 rounded-lg px-7 text-xs font-semibold tracking-[0.08em] uppercase shadow-[0_12px_30px_rgba(139,92,214,0.35)]"
              >
                Start Solving Now
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-border bg-black/30"
            >
              <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/80">
                <div className="relative aspect-video w-full">
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="group relative block h-full w-full"
                      aria-label="Play video"
                    >
                      {/* Use native img for remote YouTube thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                        alt="Why we started Boost tutor ai video preview"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 transition-colors duration-200 group-hover:bg-black/40" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex size-20 items-center justify-center rounded-full border border-[#FFFFFF1C] bg-[#1D1629] shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-transform duration-200 group-hover:scale-105 cursor-pointer">
                          <Image
                            src="/logo.png"
                            alt="BoostTutorAI logo"
                            width={80}
                            height={80}
                          />
                        </span>
                      </span>
                    </button>
                  )}
                  {isPlaying && (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                      title="Why we started Boost tutor ai"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
