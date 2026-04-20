"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative left-1/2 w-screen -translate-x-1/2 pt-0 pb-12 sm:pb-14 lg:pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="bg-accent-gradient px-5 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16"
      >
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-4">
          <div className="text-left">
            <p className="inline-flex rounded-full border border-[#FFFFFF1C] bg-[#1E0E38]/80 px-4 py-2 text-xs font-medium text-[#D2CFD7] sm:text-sm">
              🎓 Trusted by 10,000+ UK Students
            </p>
            <h1 className="mt-6 max-w-xl text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
              The Smartest Way to Ace Your GCSEs &amp; A-Levels
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#D2CFD7] sm:text-lg">
              AI-powered practice questions, instant marking, and personalised
              feedback — built around your exact exam board.
            </p>
            <div className="mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              <Button className="btn-primary-gradient h-12 w-full rounded-xl text-xs font-semibold tracking-[0.13em] uppercase">
                Start for Free
              </Button>
              <Button
                variant="ghost"
                className="h-12 w-full rounded-xl border border-[#FFFFFF1C] bg-[#1E0E38]/60 text-xs font-semibold tracking-[0.13em] uppercase text-white transition-colors duration-200 hover:bg-[#28124A] hover:text-white"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-[#8E869B]">
              No credit card required · Free to start · Cancel anytime
            </p>
          </div>
          <div />
        </div>
      </motion.div>
    </section>
  );
}
