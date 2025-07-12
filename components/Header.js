// File: components/Header.js
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 shadow-md">
      <Link href="/">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer">
          ClipGenius
        </h1>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/dashboard" className="text-sm font-medium hover:underline">
          Dashboard
        </Link>
        <Link href="/pricing" className="text-sm font-medium hover:underline">
          Pricing
        </Link>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4 px-3 py-1 border rounded-lg text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
}