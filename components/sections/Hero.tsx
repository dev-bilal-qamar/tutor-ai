"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type MathQuestion = {
  question: string;
  working: string;
  answer: string;
  acceptedAnswers: string[];
};

const initialQuestions: MathQuestion[] = [
  {
    question: "Solve: 2x + 6 = 14",
    working: "2x = 14 - 6",
    answer: "x = 4",
    acceptedAnswers: ["x=4", "4"],
  },
  {
    question: "Simplify: 3(2a - 5)",
    working: "3*inside terms",
    answer: "6a - 15",
    acceptedAnswers: ["6a-15"],
  },
  {
    question: "Find y if y/3 = 7",
    working: "Multiply both sides by 3",
    answer: "y = 21",
    acceptedAnswers: ["y=21", "21"],
  },
];

const rightSideBadges = [
  "AQA & Edexcel Verified",
  "Unlimited Variations",
  "10X Faster Outcomes",
] as const;

const leftBottomCards = [
  {
    title: "Trust Block",
    description: "50k+ Questions Solved",
  },
  {
    title: "AI Tutor Block",
    description: "Your Dedicated AI Tutor",
    helperText: "Focus on understanding, not just answers.",
  },
] as const;

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const buildQuestions = (): MathQuestion[] => {
  const x = randomInt(2, 12);
  const add = randomInt(2, 10);
  const equationRight = 2 * x + add;

  const a = randomInt(2, 9);
  const b = randomInt(2, 8);
  const left = 3 * a;
  const right = 3 * b;

  const y = randomInt(3, 36);
  const divisor = randomInt(2, 6);
  const quotient = y * divisor;

  return [
    {
      question: `Solve: 2x + ${add} = ${equationRight}`,
      working: `2x = ${equationRight} - ${add}`,
      answer: `x = ${x}`,
      acceptedAnswers: [`x=${x}`, `${x}`],
    },
    {
      question: `Simplify: 3(${a}a - ${b})`,
      working: "3*inside terms",
      answer: `${left}a - ${right}`,
      acceptedAnswers: [`${left}a-${right}`],
    },
    {
      question: `Find y if y/${divisor} = ${y}`,
      working: `Multiply both sides by ${divisor}`,
      answer: `y = ${quotient}`,
      acceptedAnswers: [`y=${quotient}`, `${quotient}`],
    },
  ];
};

export function Hero() {
  const [currentQuestions, setCurrentQuestions] =
    useState<MathQuestion[]>(initialQuestions);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(3).fill(""));
  const [checkResults, setCheckResults] = useState<Array<boolean | null>>(
    Array(3).fill(null),
  );
  const [showSolutions, setShowSolutions] = useState(false);

  const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

  const handleAnswerChange = (index: number, value: string) => {
    const updated = [...userAnswers];
    updated[index] = value;
    setUserAnswers(updated);
  };

  const handleGenerateQuestions = () => {
    setCurrentQuestions(buildQuestions());
    setUserAnswers(Array(3).fill(""));
    setCheckResults(Array(3).fill(null));
    setShowSolutions(false);
  };

  const handleSolve = () => {
    setShowSolutions(true);
  };

  const handleCheckAnswers = () => {
    const results = currentQuestions.map((item, index) =>
      item.acceptedAnswers.includes(normalize(userAnswers[index])),
    );
    setCheckResults(results);
  };

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
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:px-4">
          <div className="text-left">
            <p className="inline-flex rounded-full border border-[#FFFFFF1C] bg-[#1E0E38]/80 px-4 py-2 text-xs font-medium tracking-widest text-[#D2CFD7] uppercase sm:text-sm">
              AI Exam Prep System
            </p>
            <h1 className="mt-6 max-w-xl text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
              Master Your Exams. Solved in Seconds.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#D2CFD7] sm:text-lg">
              Instant, verified solutions for AQA, Edexcel, and more. Upload your
              problem and get immediate working, detailed explanations, and
              unlimited AI-generated variants.
            </p>
            <div className="mt-8 max-w-md">
              <Button className="btn-primary-gradient h-12 w-full rounded-lg px-8 text-xs font-semibold tracking-[0.08em] uppercase shadow-[0_12px_30px_rgba(139,92,214,0.35)] sm:w-auto whitespace-nowrap">
                Get Your First Answer Free
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {leftBottomCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#FFFFFF1C] bg-[#1E0E38]/65 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.24)]"
                >
                  <p className="text-xs font-semibold tracking-[0.08em] text-[#CDF660] uppercase">
                    {card.title}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                    {card.description}
                  </p>
                  {"helperText" in card ? (
                    <p className="mt-2 text-sm leading-6 text-[#D2CFD7]">
                      {card.helperText}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-2xl border border-[#FFFFFF1C] bg-[#120824] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="rounded-xl border border-[#FFFFFF1C] bg-white p-4 text-[#111827] sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-[0.08em] text-[#5E2CAF] uppercase">
                    Math Paper
                  </p>
                  <span className="rounded-md bg-[#EEF2FF] px-2 py-1 text-xs font-medium text-[#4F46E5]">
                    GCSE
                  </span>
                </div>

                <div className="mt-4 space-y-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 sm:p-4">
                  {currentQuestions.map((item, index) => (
                    <div
                      key={item.question}
                      className="rounded-md border border-[#E5E7EB] bg-white p-3"
                    >
                      <p className="text-sm font-semibold text-[#111827] sm:text-base">
                        {`Q${index + 1}. ${item.question.replace(/^Q\d+\.\s*/i, "")}`}
                      </p>

                      <input
                        type="text"
                        value={userAnswers[index]}
                        onChange={(event) =>
                          handleAnswerChange(index, event.target.value)
                        }
                        placeholder="Write your answer"
                        className="mt-2 h-9 w-full rounded-md border border-[#D1D5DB] px-3 text-sm text-[#111827] outline-none focus:border-[#8B5CD6]"
                      />
                      {showSolutions ? (
                        <p className="mt-2 rounded-md bg-[#ECFDF3] px-3 py-1.5 text-xs font-semibold text-[#065F46]">
                          Answer: {item.answer}
                        </p>
                      ) : checkResults[index] !== null ? (
                        <p
                          className={`mt-2 rounded-md px-3 py-1.5 text-xs font-semibold ${checkResults[index]
                            ? "bg-[#ECFDF3] text-[#065F46]"
                            : "bg-[#FEF2F2] text-[#991B1B]"
                            }`}
                        >
                          {checkResults[index]
                            ? "Correct answer"
                            : "Wrong answer"}
                        </p>
                      ) : (
                        <p className="mt-2 rounded-md bg-[#F3F4F6] px-3 py-1.5 text-xs text-[#6B7280]">
                          Not checked yet
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <Button
                    type="button"
                    onClick={handleGenerateQuestions}
                    className="h-10 rounded-lg bg-[#E8E7EB] text-[11px] font-semibold tracking-[0.12em] text-[#111827] uppercase hover:bg-[#d9d7df]"
                  >
                    Generate
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSolve}
                    className="h-10 rounded-lg bg-[#1E0E38] text-[11px] font-semibold tracking-[0.12em] text-white uppercase hover:bg-[#2C1553]"
                  >
                    Solve
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCheckAnswers}
                    className="btn-primary-gradient h-10 rounded-lg text-[11px] font-semibold tracking-[0.12em] uppercase"
                  >
                    Check
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
