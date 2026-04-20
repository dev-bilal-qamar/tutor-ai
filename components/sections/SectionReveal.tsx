"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({ children, className }: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
