"use client";
import Image from "next/image";

const boards = [
  { name: "AQA", src: "/aqa.png" },
  { name: "CBAC", src: "/cbca.png" },
  { name: "CCEA", src: "/ccea.png" },
  { name: "OCR", src: "/ocr.png" },
  { name: "Pearson Edexcel", src: "/pearson.png" },
  { name: "SQA", src: "/sqa.png" },
];

export function BoardLogos() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 ">
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-5 sm:px-6">
        <h3 className="text-center text-2xl font-semibold text-[var(--color-primary)] sm:text-3xl">
          Trusted UK Exam Boards
        </h3>
      </div>
      <div className="relative overflow-hidden border-y border-[var(--color-glass-border)] bg-gradient-to-r from-[#d7f57a] via-[var(--color-highlight)] to-[#d7f57a] py-5 sm:py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-highlight)] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-highlight)] to-transparent sm:w-28" />
        <div className="relative overflow-hidden">
          <div className="marquee-right-to-left flex min-w-max items-center gap-6 px-6 sm:gap-10">
            {[...boards, ...boards].map((board, index) => (
              <div
                key={`${board.name}-${index}`}
                className="group flex h-14 w-[185px] shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white/80 px-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                <Image
                  src={board.src}
                  alt={`${board.name} logo`}
                  width={220}
                  height={64}
                  className="max-h-8 w-auto object-contain opacity-90 saturate-90 transition-all duration-200 group-hover:opacity-100 group-hover:saturate-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
