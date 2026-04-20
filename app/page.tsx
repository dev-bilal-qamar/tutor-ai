import { About } from "@/components/sections/About";
import { BoardLogos } from "@/components/sections/BoardLogos";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyStarted } from "@/components/sections/WhyStarted";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0F071C] text-white">
      <Header />
      <main className="mx-auto w-full max-w-[1280px] px-4">
        <Hero />
        <About />
        <BoardLogos />
        <HowItWorks />
        <Pricing />
        <WhyStarted />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
