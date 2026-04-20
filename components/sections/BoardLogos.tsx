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
    <section className="relative left-1/2 w-screen -translate-x-1/2">
      <div className="border-y border-(--color-dark-accent) bg-(--color-highlight) py-8 sm:py-10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-5 sm:gap-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12">
          <p className="shrink-0 text-center text-base font-semibold uppercase tracking-wide text-(--color-bg) sm:text-lg lg:text-left">
            Our Partners &amp; Clients
          </p>

          <div className="no-scrollbar flex min-w-0 flex-1 items-center gap-6 overflow-x-auto sm:gap-8 lg:justify-end lg:overflow-visible">
            {boards.slice(0, 5).map((board) => (
              <div
                key={board.name}
                className="flex min-w-[110px] shrink-0 justify-center sm:min-w-[130px] lg:min-w-[120px]"
              >
                <Image
                  src={board.src}
                  alt={`${board.name} logo`}
                  width={390}
                  height={158}
                  className="h-12 w-auto max-w-[110px] object-contain sm:h-14 sm:max-w-[130px] lg:h-16 lg:max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
