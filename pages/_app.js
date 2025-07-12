// File: pages/_app.js

import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <AuthProvider>
      <Head>
        <title>ClipGenius – AI Video Toolkit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111827" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Font: Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Cookie Consent */}
      <Script
        id="cookie-consent"
        dangerouslySetInnerHTML={{
          __html: `
          window.addEventListener('DOMContentLoaded', function() {
            if (!localStorage.getItem('cookie-consent')) {
              const banner = document.createElement('div');
              banner.innerHTML = '<div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1f2937; color: white; padding: 10px 20px; font-size: 14px; display: flex; justify-content: space-between; align-items: center; z-index: 1000;">This website uses cookies to improve your experience.<button style="background: white; color: #1f2937; border: none; padding: 6px 12px; margin-left: 20px; cursor: pointer; font-weight: bold;" onclick="this.parentElement.remove(); localStorage.setItem(\\'cookie-consent\\', true);">Got it</button></div>';
              document.body.appendChild(banner);
            }
          });
        `,
        }}
      />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full shadow bg-white dark:bg-zinc-800 text-black dark:text-white border dark:border-zinc-700 hover:scale-105 transition"
        aria-label="Toggle Theme"
      >
        {isDark ? '🌞' : '🌙'}
      </button>

      <Component {...pageProps} />
    </AuthProvider>
  );
}
