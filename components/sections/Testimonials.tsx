"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/sections/SectionReveal";

const testimonials = [
  {
    name: "Sarah J.,",
    level: "A-Level Student",
    quote:
      "\"I was stuck on Chemistry calculations for weeks and almost gave up. BoostTutorAI didn't just give me the answer; it explained the logic step-by-step. My mock exam grade jumped from a C to an A.\"",
  },
  {
    name: "Ahmed K.,",
    level: "GCSE Student",
    quote:
      "\"Total lifesaver during revision season. Getting instant solutions at midnight helped me stop stressing and actually learn the concepts. It feels like having a private tutor in my pocket 24/7.\"",
  },
];

function getInitials(name: string) {
  return name
    .replace(".", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <SectionReveal>
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.7fr] md:items-start lg:gap-10">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#CDF660] uppercase sm:text-sm">
              Testimonials
            </p>
            <h2 className="max-w-md text-2xl leading-tight font-semibold text-white sm:text-3xl lg:text-4xl">
              What Our Students Say
            </h2>
            <button
              type="button"
              className="btn-primary-gradient inline-flex h-11 items-center justify-center rounded-xl px-7 text-xs font-semibold tracking-[0.13em] uppercase"
            >
              View All Reviews
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              >
                <article className="relative h-full overflow-hidden rounded-2xl border border-[#FFFFFF1C] bg-linear-to-b from-[#5A23B8]/80 to-[#2D114F]/80 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
                  <div className="absolute top-0 right-0 h-14 w-14 rounded-bl-3xl bg-[#CDF660]">
                    <span className="absolute top-2 right-3 text-2xl leading-none text-[#2F1A4D]">
                      &rdquo;
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full border border-[#FFFFFF52] bg-white/20 text-sm font-semibold text-white">
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-[#C8B7E7]">{item.level}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[#F3EFFE]">{item.quote}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
