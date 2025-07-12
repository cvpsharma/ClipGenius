// File: pages/dashboard.js

import { useEffect, useState } from 'react';
import tools from '@/utils/tools';
import { useUser } from '@/lib/hooks';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar';
import ProtectedRoute from '@/components/ProtectedRoute';

const planLimits = {
  Starter: { videosPerMonth: 10 },
  Standard: { videosPerMonth: 50 },
  Professional: { videosPerMonth: 200 },
  Enterprise: { videosPerMonth: 9999 }, // virtually unlimited
};

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
}

function Dashboard() {
  const { user, loading } = useUser();
  const [videoUsage, setVideoUsage] = useState(0);

  useEffect(() => {
    if (user && user.id) {
      fetch(`/api/usage?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setVideoUsage(data.videosUsed || 0));
    }
  }, [user]);

  if (loading || !user) return <div className="p-6">Loading...</div>;

  const plan = user.plan || 'Starter';
  const planLimit = planLimits[plan]?.videosPerMonth || 10;
  const usagePercent = Math.min((videoUsage / planLimit) * 100, 100);

  const isToolAvailable = (toolCategory) => {
    if (plan === 'Starter') return toolCategory === '🎙️ Core Tools';
    if (plan === 'Standard') return toolCategory !== '🎓 Educational & Developer Tools';
    return true; // Pro and Enterprise get all tools
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name || 'Creator'} 👋</h1>
      <p className="mb-2">Plan: <span className="font-semibold">{plan}</span></p>
      <ProgressBar value={usagePercent} label={`Video Usage: ${videoUsage}/${planLimit}`} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {tools.map((tool) =>
          isToolAvailable(tool.category) && (
            <Link
              key={tool.id || tool.name}
              href={tool.route || tool.path}
              className="border p-4 rounded-2xl shadow hover:shadow-lg transition bg-white dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
              <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400">{tool.category}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
