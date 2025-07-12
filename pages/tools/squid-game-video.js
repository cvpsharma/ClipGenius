// File: pages/tools/squid-game-video.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SquidGameVideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setStatus('Creating Squid Game-themed video...');
    setVideoUrl(null);

    // Simulated generation delay
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/movie.mp4');
      setStatus('Here is your Squid Game-style video!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🦑 Squid Game Theme Video Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Generate videos with eerie Squid Game-inspired visuals, sound, and subtitles.
        </p>

        <textarea
          rows={5}
          placeholder="Enter your dark or mysterious storyline..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!prompt || loading}
          className="mt-4 bg-pink-700 text-white px-6 py-2 rounded-lg hover:bg-pink-800 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Video'}
        </button>

        {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}

        {videoUrl && (
          <video
            src={videoUrl}
            controls
            className="mt-6 rounded-lg shadow-lg w-full aspect-video"
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
