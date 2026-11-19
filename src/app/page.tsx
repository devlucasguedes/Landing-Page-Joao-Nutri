import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import  Faq  from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2B0A10] text-[#F5F5F7]">
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <Faq />
    </main>
  );
}
