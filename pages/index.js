// File: pages/index.js

import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ClipGenius – AI Video Toolkit</title>
        <meta name="description" content="Create viral AI videos for TikTok, Reels, YouTube & more using ClipGenius." />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center px-6 bg-white dark:bg-zinc-900 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
          Welcome to <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">ClipGenius 🎬</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          The ultimate AI video toolkit for creators, marketers, and meme lords. Instantly create Shorts, Reels, TikToks, Avatars, and more — with just text.
        </p>

        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium shadow-lg transition"
        >
          Go to Dashboard
        </Link>

        <div className="mt-12 text-sm text-gray-400 dark:text-gray-500">
          Made with ❤️ by the ClipGenius Team
        </div>
      </main>
    </>
  );
}
