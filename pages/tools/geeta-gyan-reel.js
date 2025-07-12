// File: pages/tools/geeta-gyan-reel.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function GeetaGyanReel() {
  const [shloka, setShloka] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!shloka.trim()) return;
    setLoading(true);
    setStatus('Creating spiritual reel...');
    setVideoUrl(null);

    // Simulate generation
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // placeholder
      setStatus('Your Geeta Gyaan reel is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">📿 Geeta Gyaan Reels</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a Shloka or Gyaan from the Bhagavad Geeta to create a visual spiritual reel.
        </p>

        <textarea
          rows={4}
          placeholder="Enter Geeta Shloka or Gyaan here..."
          value={shloka}
          onChange={(e) => setShloka(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!shloka || loading}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Reel'}
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
