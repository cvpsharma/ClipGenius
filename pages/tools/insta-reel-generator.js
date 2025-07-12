// File: pages/tools/insta-reel-generator.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function InstagramReelGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [reelUrl, setReelUrl] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setStatus('Generating your Instagram Reel...');
    setReelUrl(null);

    // Simulate generation delay
    setTimeout(() => {
      setReelUrl('https://www.w3schools.com/html/mov_bbb.mp4');
      setStatus('Your AI-generated Reel is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">📸 Instagram Reel Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a topic or idea, and we’ll create a trendy Instagram Reel with AI visuals and music.
        </p>

        <textarea
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your reel idea (e.g., 'Morning routine tips', 'Motivational quote')"
          className="w-full p-3 border rounded-lg mb-4 bg-white dark:bg-zinc-800"
        />

        <button
          onClick={handleGenerate}
          disabled={!prompt || loading}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Reel'}
        </button>

        {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}

        {reelUrl && (
          <video
            src={reelUrl}
            controls
            className="mt-6 rounded-lg shadow-lg w-full aspect-[9/16]"
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
