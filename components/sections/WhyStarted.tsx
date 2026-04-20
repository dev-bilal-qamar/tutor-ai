"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useState } from "react";
import { SectionReveal } from "@/components/sections/SectionReveal";

const VIDEO_ID = "M7lc1UVf-VE";

export function WhyStarted() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="why-started" className="py-20 sm:py-24">
      <SectionReveal className="space-y-8">
        <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl text-center">
          Why we started Boost tutor ai
        </h2>

        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#FFFFFF1C] bg-[#1E0E38]/70">
          <div className="relative aspect-video w-full">
            {!isPlaying ? (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
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
            ) : (
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
      </SectionReveal>
    </section>
  );
}
