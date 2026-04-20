"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/sections/SectionReveal";

const testimonials = [
  {
    name: "Sarah M.",
    level: "GCSE Biology",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "I went from a grade 5 to a grade 8 in just 6 weeks. The AI feedback tells you exactly why your answer was wrong — not just that it was wrong.",
  },
  {
    name: "James T.",
    level: "A-Level Chemistry",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Finally an app that actually marks essays properly. My teacher was genuinely shocked at how much I improved in one term.",
  },
  {
    name: "Aisha K.",
    level: "GCSE Maths",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "The mock exams feel exactly like the real thing. I walked into my exam feeling prepared for the first time ever.",
  },
  {
    name: "Daniel R.",
    level: "A-Level History",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "The AI tutor pushes you to think and find the answer yourself. That's what actually makes it stick in your memory.",
  },
  {
    name: "Priya S.",
    level: "GCSE Physics",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Started using it 3 weeks before my exam and jumped a full grade. Genuinely wish I had found it sooner.",
  },
  {
    name: "Ethan W.",
    level: "A-Level Economics",
    stars: "⭐⭐⭐⭐⭐",
    quote:
      "Worth every single penny. So much better than paying for a private tutor who cancels half the time anyway.",
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
      <SectionReveal className="space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
            Students Who Used It. Grades That Prove It.
          </h2>
          <p className="text-base text-[#D2CFD7] sm:text-lg">
            Real students. Real exams. Real results.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
            >
              <article className="h-full rounded-2xl border border-[#FFFFFF1C] bg-[#1E0E38]/70 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.24)] transition-transform duration-200 hover:-translate-y-1">
                <p className="text-sm text-[#FACC15]">{item.stars}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full border border-[#FFFFFF1C] bg-[#8B5CD6]/30 text-sm font-semibold text-white">
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-[#8E869B]">{item.level}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#D2CFD7]">{item.quote}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
