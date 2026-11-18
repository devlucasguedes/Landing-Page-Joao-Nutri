import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2B0A10] text-[#F5F5F7]">
      <Hero />
      <About />
      <HowItWorks />
    </main>
  );
}
