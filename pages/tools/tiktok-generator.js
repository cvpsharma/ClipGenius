// File: pages/tools/tiktok-generator.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function TikTokGenerator() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const generateTikTok = async () => {
    if (!topic) return;
    setLoading(true);
    setVideoUrl(null);

    // Simulated API call delay
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with real output
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🎵 AI TikTok Video Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Create engaging, viral-style TikTok videos powered by AI.
        </p>

        <input
          type="text"
          placeholder="Enter a topic or trend..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg dark:bg-zinc-800 dark:text-white"
        />

        <button
          onClick={generateTikTok}
          disabled={loading || !topic}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 disabled:opacity-50"
        >
          {loading ? 'Generating TikTok...' : 'Generate TikTok Video'}
        </button>

        {videoUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <video controls className="w-full rounded-lg shadow">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
