"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaBullseye,
  FaCheckCircle,
  FaClock,
  FaComments,
  FaFileAlt,
  FaPenNib,
} from "react-icons/fa";
import { SectionReveal } from "@/components/sections/SectionReveal";

const items: {
  icon: IconType;
  title: string;
  description: string;
}[] = [
    {
      icon: FaPenNib,
      title: "Exam-Style Questions",
      description:
        "Practice questions that mirror real past papers, matched to your exam board style and mark scheme.",
    },
    {
      icon: FaCheckCircle,
      title: "Instant AI Marking",
      description:
        "Get your answers marked instantly using the same standards as real GCSE and A-Level examiners.",
    },
    {
      icon: FaFileAlt,
      title: "Essay Feedback",
      description:
        "Write full essays and receive detailed feedback based on your syllabus assessment objectives.",
    },
    {
      icon: FaClock,
      title: "Mock Exams",
      description:
        "Full timed papers with real grade boundaries and a results day — as close to exam day as it gets.",
    },
    {
      icon: FaComments,
      title: "AI Tutor Chat",
      description:
        "Ask anything. Get guided to the answer — not just given it. Learn faster, remember longer.",
    },
    {
      icon: FaBullseye,
      title: "Adaptive Practice",
      description:
        "The app identifies your weak spots and automatically targets them so you improve where it matters most.",
    },
  ];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <SectionReveal className="space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#D2CFD7] sm:text-lg">
            One subscription. Every tool you need to go from revision to
            results.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              className="group h-full rounded-2xl border border-[#FFFFFF1C] bg-[#1E0E38]/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 hover:border-[#8B5CD6] hover:shadow-[0_16px_45px_rgba(139,92,214,0.28)]"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl border border-[#FFFFFF1C] bg-[#0F071C]/50 text-[#CDF660]">
                <item.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D2CFD7] sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
