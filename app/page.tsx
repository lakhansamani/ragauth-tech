// RAGAuth landing page — ragauth.tech
// Product by Praalak Tech Solutions (praalaktech.com)
// Powered by Authorizer (authorizer.dev)
// Contact: lakhan.samani@authorizer.dev | lakhan@praalaktech.com

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import UseCases from "@/components/UseCases";
import DemoComparison from "@/components/DemoComparison";
import HowItWorks from "@/components/HowItWorks";
import CompetitorTable from "@/components/CompetitorTable";
import FAQSection from "@/components/FAQSection";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <ProofStrip />
        <UseCases />
        <DemoComparison />
        <HowItWorks />
        <CompetitorTable />
        <FAQSection />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
