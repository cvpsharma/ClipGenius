import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { ToolBundlesSection } from '../components/ToolBundlesSection';
import { FinalCTASection } from '../components/FinalCTASection';

const PricingPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-euclid_0c3530">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
            Choose Your Plan
          </span>
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          Select the perfect plan for your video creation needs. From individual creators to enterprise teams, we have a solution for everyone.
        </p>
      </div>

      <PricingSection />
      
      <div className="mt-24">
        <ToolBundlesSection />
      </div>
      
      <div className="mt-24 mb-16">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default PricingPage;
