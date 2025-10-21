import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { PaymentExperience } from "@/components/PaymentExperience";
import { HowItWorks } from "@/components/HowItWorks";
import { IntegrationSection } from "@/components/IntegrationSection";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <PaymentExperience />
      <HowItWorks />
      <IntegrationSection />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default Index;
