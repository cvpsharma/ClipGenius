import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PricingPage from './pages/PricingPage';
import TermsPage from './pages/TermsPage';
import PolicyPage from './pages/PolicyPage';
import CommunityPage from './pages/CommunityPage';
import BlogPage from './pages/BlogPage';
import ToolDetailPage from './pages/ToolDetailPage';
import BundlePage from './pages/BundlePage';

export default function App() {
  return (
    <Router>
      <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border block h-full tracking-[normal] leading-6 list-outside list-disc overscroll-y-none scroll-smooth text-start indent-[0px] normal-case visible border-separate font-ui_sans_serif">
        <div className="box-border h-full">
          <main className="box-border h-full w-full font-inter_e8ce0c">
            <div className="box-border h-full w-full">
              <main className="relative items-center bg-[#0a0a0f] bg-[radial-gradient(ellipse_at_top,rgba(25,25,35,0.5),transparent_70%),radial-gradient(ellipse_at_bottom,rgba(10,120,180,0.1),transparent_70%)] box-border flex flex-col overflow-x-hidden overflow-y-auto z-0 min-h-screen">
                <Header />

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/tools/:toolId" element={<ToolDetailPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/policy" element={<PolicyPage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/bundles/:bundleId" element={<BundlePage />} />
                </Routes>

                <Footer />
                <section aria-label="Notifications alt+T" className="box-border"></section>
              </main>
            </div>
          </main>
        </div>

        {/* Removed: <next-route-announcer /> since it's specific to Next.js */}
        {/* Optional replacement if needed for accessibility */}
        <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
          {/* This can be dynamically updated for route announcements */}
        </div>
      </div>
    </Router>
  );
}

