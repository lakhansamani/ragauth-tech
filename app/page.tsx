import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <FAQSection />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
