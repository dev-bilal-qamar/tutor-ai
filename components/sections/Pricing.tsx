"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/sections/SectionReveal";

const plans = [
  {
    name: "Starter",
    badge: "Most Popular",
    monthlyPrice: "£19.99",
    yearlyPrice: "£14.99",
    billingMonthly: "Billed monthly",
    billingYearly: "Billed yearly",
    features: [
      "Full access to all subjects",
      "Unlimited practice questions",
      "AI marking & feedback",
      "Mock exams included",
      "Cancel anytime",
    ],
    featured: true,
  },
  {
    name: "Pro",
    badge: "Best Value",
    monthlyPrice: "£29.99",
    yearlyPrice: "£22.99",
    billingMonthly: "Billed monthly",
    billingYearly: "Billed yearly",
    features: [
      "Everything in Starter",
      "Essay feedback and advanced insights",
      "Priority mock exam access",
      "Priority support",
    ],
  },
  {
    name: "Elite",
    badge: "Top Tier",
    monthlyPrice: "£49.99",
    yearlyPrice: "£39.99",
    billingMonthly: "Billed monthly",
    billingYearly: "Billed yearly",
    features: [
      "Everything in Pro",
      "1-to-1 study strategy sessions",
      "Fast-track support queue",
      "Early feature access",
    ],
  },
];

export function Pricing() {
  const [billingMode, setBillingMode] = useState<"monthly" | "yearly">("monthly");
  const maxFeatureCount = Math.max(...plans.map((plan) => plan.features.length));

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <SectionReveal className="space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#CDF660] uppercase sm:text-sm">
            Pricing
          </p>
          <h2 className="text-2xl leading-tight font-semibold text-white sm:text-3xl lg:text-4xl">
            Choose the Plan That Guarantees Your Grade.
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex rounded-xl border border-[#FFFFFF1C] bg-[#1E0E38]/80 p-1">
            <button
              type="button"
              onClick={() => setBillingMode("monthly")}
              className={`rounded-lg px-5 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 ${billingMode === "monthly"
                ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                : "text-[#D2CFD7] hover:text-white"
                }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingMode("yearly")}
              className={`rounded-lg px-5 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 ${billingMode === "yearly"
                ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                : "text-[#D2CFD7] hover:text-white"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${plan.featured
                  ? "border-[#8B5CD6] bg-gradient-to-b from-[#1E0E38] to-[#130927] shadow-[0_16px_50px_rgba(139,92,214,0.34)]"
                  : "border-[#FFFFFF1C] bg-[#1E0E38]/70"
                  } transition-shadow duration-200 hover:shadow-[0_22px_60px_rgba(139,92,214,0.30)]`}
              >
                <div className="min-h-[170px]">
                  <p className="inline-flex rounded-full border border-[#FFFFFF1C] bg-[#0F071C]/70 px-3 py-1 text-xs font-medium text-[#CDF660]">
                    {plan.badge}
                  </p>
                  <p className="mt-5 text-2xl leading-tight font-semibold text-white sm:text-3xl">
                    {plan.name}
                  </p>
                  <p className="mt-3 text-4xl leading-none font-semibold text-white sm:text-5xl">
                    {billingMode === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-lg text-[#D2CFD7]">
                      /{billingMode === "monthly" ? "month" : "month"}
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-[#D2CFD7]">
                    {billingMode === "monthly"
                      ? plan.billingMonthly
                      : plan.billingYearly}
                  </p>
                </div>

                <ul className="mt-4 space-y-3 border-t border-[#FFFFFF1C] pt-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[#D2CFD7]">
                      <Check className="mt-0.5 size-4 text-[#CDF660]" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                  {Array.from({
                    length: maxFeatureCount - plan.features.length,
                  }).map((_, idx) => (
                    <li
                      key={`${plan.name}-placeholder-${idx}`}
                      className="flex items-start gap-3 opacity-0"
                      aria-hidden="true"
                    >
                      <Check className="mt-0.5 size-4" />
                      <span className="text-sm sm:text-base">placeholder</span>
                    </li>
                  ))}
                </ul>
                <Button className="btn-primary-gradient mt-7 h-11 w-full rounded-xl text-xs font-semibold tracking-[0.13em] uppercase">
                  Start for Free
                </Button>
                <p className="mt-3 text-center text-xs text-[#8E869B]">
                  No credit card required
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
