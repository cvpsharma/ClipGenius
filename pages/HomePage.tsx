import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { ImpactSection } from '../components/ImpactSection';
import { ExpectationSection } from '../components/ExpectationSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { ToolsSection } from '../components/ToolsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { PricingSection } from '../components/PricingSection';
import { ToolBundlesSection } from '../components/ToolBundlesSection';

const HomePage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Full Width */}
      <div className="w-full">
        <HeroSection />
      </div>
      
      {/* Stats Section - Full Width */}
      <div className="mt-16">
        <StatsSection />
      </div>
      
      {/* Pricing Section - Featured */}
      <div className="mt-24 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff80] to-[#089bff] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <PricingSection />
      </div>
      
      {/* Tool Bundles Section */}
      <div className="mt-16">
        <ToolBundlesSection />
      </div>
      
      {/* Benefits and How It Works - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
        <div>
          <BenefitsSection />
        </div>
        <div>
          <HowItWorksSection />
        </div>
      </div>
      
      {/* Impact Section - Full Width */}
      <div className="mt-24">
        <ImpactSection />
      </div>
      
      {/* Tools and Expectations - Featured Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
        <div className="lg:col-span-2">
          <ToolsSection />
        </div>
        <div>
          <ExpectationSection />
        </div>
      </div>
      
      {/* FAQ Section - Full Width */}
      <div className="mt-24">
        <FAQSection />
      </div>
      
      {/* Final CTA - Prominent */}
      <div className="mt-24 mb-24">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default HomePage;
