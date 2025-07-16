import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] border border-zinc-700/50 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 mb-6">
            Welcome to ClipGenius. By accessing or using our services, you agree to be bound by these Terms of Service.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-300 mb-6">
            By accessing or using the ClipGenius platform, website, or any applications made available by ClipGenius (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Description of Service</h2>
          <p className="text-slate-300 mb-6">
            ClipGenius provides an AI-powered video creation platform that allows users to create, edit, and share videos. The Service may include various features and tools for video creation, editing, and distribution.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
          <p className="text-slate-300 mb-6">
            To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. User Content</h2>
          <p className="text-slate-300 mb-6">
            You retain all rights to any content you submit, post, or display on or through the Service. By submitting, posting, or displaying content on or through the Service, you grant ClipGenius a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Prohibited Uses</h2>
          <p className="text-slate-300 mb-6">
            You agree not to use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Termination</h2>
          <p className="text-slate-300 mb-6">
            ClipGenius reserves the right to terminate or suspend your account and access to the Service at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Changes to Terms</h2>
          <p className="text-slate-300 mb-6">
            ClipGenius reserves the right, at its sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contact Us</h2>
          <p className="text-slate-300 mb-6">
            If you have any questions about these Terms, please contact us at support@clipgenius.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;