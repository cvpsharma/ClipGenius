import React from 'react';

const PolicyPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] border border-zinc-700/50 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 mb-6">
            At ClipGenius, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-300 mb-6">
            We collect information you provide directly to us when you create an account, use our services, or communicate with us. This may include your name, email address, payment information, and any content you create or upload to our platform.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-300 mb-6">
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, to communicate with you, and to comply with legal obligations.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-slate-300 mb-6">
            We do not sell, rent, or share your personal information with third parties except as described in this Privacy Policy. We may share your information with service providers who perform services on our behalf, or when required by law.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
          <p className="text-slate-300 mb-6">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
          <p className="text-slate-300 mb-6">
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can exercise these rights by contacting us at privacy@clipgenius.com.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="text-slate-300 mb-6">
            We use cookies and similar tracking technologies to collect information about your browsing activities and to improve your experience on our platform.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p className="text-slate-300 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contact Us</h2>
          <p className="text-slate-300 mb-6">
            If you have any questions about this Privacy Policy, please contact us at privacy@clipgenius.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
