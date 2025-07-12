// File: pages/tools/shiva-stories-video.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ShivaStoriesVideo() {
  const [storyText, setStoryText] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!storyText.trim()) return;
    setLoading(true);
    setStatus('Generating Shiva story video...');
    setVideoUrl(null);

    // Simulated API call
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Placeholder video
      setStatus('Your video is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🕉️ Lord Shiva Stories (Text-to-Video)</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a story, message, or description related to Lord Shiva to generate a powerful themed video.
        </p>

        <textarea
          rows={5}
          placeholder="E.g., Story of Neelkanth, Mahadev and Bhasmasura..."
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!storyText || loading}
          className="mt-4 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Shiva Video'}
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
