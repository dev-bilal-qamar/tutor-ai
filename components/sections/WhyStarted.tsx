"use client";
/* eslint-disable @next/next/no-img-element */

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/sections/SectionReveal";

const featurePoints = [
  "24/7 Instant Access",
  "Step-by-Step Logic",
  "Verified Curriculum Accuracy",
  "Unlimited Practice Variations",
  "Cost-Effective Tutoring",
  "Track Your Progress",
];

export function WhyStarted() {
  const leftFeaturePoints = featurePoints.slice(0, 3);
  const rightFeaturePoints = featurePoints.slice(3);

  return (
    <section id="why-started" className="py-20 sm:py-24">
      <SectionReveal className="space-y-8">
        <div className="mx-auto w-full max-w-8xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center lg:gap-12">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/80">
              <div className="relative aspect-4/3 w-full">
                <img
                  src="https://kit.holylinedesign.com/cerdas/wp-content/uploads/sites/27/2025/03/young-serious-female-programmer-or-developer-in-fo-KG33VXG.jpg"
                  alt="Student learning with BoostTutorAI"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#140A26]/20 via-transparent to-[#140A26]/25" />
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-highlight)] uppercase sm:text-sm">
                WHY BOOSTTUTORAI?
              </p>
              <h2 className="text-2xl leading-tight font-semibold text-foreground sm:text-3xl lg:text-4xl">
                Your Private Tutor, Without the Price Tag or the Wait.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Stop wasting hours staring at the same textbook. BoostTutorAI
                provides personalized, 24/7 support that understands the UK
                curriculum better than a standard textbook. We break down the
                most complex exam questions into simple, logical steps-anytime,
                anywhere.
              </p>

              <div className="grid gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
                <ul className="space-y-3">
                  {leftFeaturePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#CDF660]" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {rightFeaturePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#CDF660]" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="btn-primary-gradient mt-2 h-11 rounded-xl px-7 text-xs font-semibold tracking-[0.13em] uppercase">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
