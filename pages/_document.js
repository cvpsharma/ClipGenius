// File: pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts: Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta */}
        <meta name="description" content="ClipGenius – The ultimate AI video toolkit" />
        <meta name="keywords" content="AI video, TikTok, Reels, Shorts, Text to Video, ClipGenius" />
        <meta name="author" content="ClipGenius Team" />
        <meta name="theme-color" content="#111827" />
      </Head>

      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
