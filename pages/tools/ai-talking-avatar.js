// File: pages/tools/ai-talking-avatar.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AITalkingAvatar() {
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);

  const generateAvatar = async () => {
    if (!script.trim()) return;
    setLoading(true);

    // Simulate API call for avatar generation
    setTimeout(() => {
      setAvatarUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with actual result URL
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🧑‍💻 AI Talking Avatar</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Type in a message or script, and generate a realistic talking avatar video.
        </p>

        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Enter your message or script here..."
          rows={4}
          className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:text-white mb-4"
        />

        <button
          onClick={generateAvatar}
          disabled={loading || !script}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating Avatar...' : 'Generate Avatar'}
        </button>

        {avatarUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Your Talking Avatar</h2>
            <video controls className="w-full rounded-lg shadow">
              <source src={avatarUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
