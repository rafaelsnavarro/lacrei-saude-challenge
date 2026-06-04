import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <Benefits />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}