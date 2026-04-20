"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SectionReveal } from "@/components/sections/SectionReveal";

const product = ["Features", "Pricing", "How It Works", "Updates"];
const company = ["About", "Blog", "Bursary", "Contact"];
const legal = ["Privacy Policy", "Terms of Service", "Cookies"];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative left-1/2 w-screen -translate-x-1/2 "
    >
      <SectionReveal className="border-y border-border bg-card/90">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-1">
                <Image src="/logo.png" alt="App logo" width={46} height={46} />
                <p className="text-xl font-semibold text-foreground">BoostTutorAI</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                AI Tutoring Built for UK Exams
              </p>
              <div className="mt-5 flex items-center gap-2">
                <SocialIcon
                  icon={<FaXTwitter className="size-4" />}
                  label="Twitter/X"
                />
                <SocialIcon
                  icon={<FaInstagram className="size-4" />}
                  label="Instagram"
                />
                <SocialIcon
                  icon={<FaLinkedinIn className="size-4" />}
                  label="LinkedIn"
                />
              </div>
            </div>
            <FooterColumn title="Product" items={product} />
            <FooterColumn title="Company" items={company} />
            <FooterColumn title="Legal" items={legal} />
          </div>

          <div className="mt-10 border-t border-border pt-5 text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} BoostTutorAI. All rights reserved.
            </p>
            <p className="mt-2 sm:mt-0">
              Not affiliated with AQA, Edexcel, OCR or WJEC.
            </p>
          </div>
        </div>
      </SectionReveal>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-[0.12em] text-[var(--color-highlight)] uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

type SocialIconProps = {
  icon: ReactNode;
  label: string;
};

function SocialIcon({ icon, label }: SocialIconProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors duration-200 hover:bg-[#8B5CD6] hover:text-white"
    >
      {icon}
    </button>
  );
}
