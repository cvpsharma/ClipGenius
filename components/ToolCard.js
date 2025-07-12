// File: components/ToolCard.js
import Link from 'next/link';

export default function ToolCard({ tool }) {
  return (
    <Link
      href={tool.route || tool.path}
      className="border p-4 rounded-2xl shadow hover:shadow-lg transition bg-white dark:bg-zinc-900"
    >
      <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
      <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400">{tool.category}</p>
    </Link>
  );
}
