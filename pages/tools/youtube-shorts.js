// File: pages/tools/youtube-shorts.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function YouTubeShorts() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState(null);

  const generateShort = async () => {
    if (!idea) return;
    setLoading(true);
    setShortUrl(null);

    // Simulated delay for AI video generation
    setTimeout(() => {
      setShortUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with actual video
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">📱 YouTube Shorts Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Turn your content ideas into AI-generated YouTube Shorts.
        </p>

        <textarea
          placeholder="Type your idea or script here..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={4}
          className="w-full mb-4 p-3 border rounded-lg dark:bg-zinc-800 dark:text-white"
        />

        <button
          onClick={generateShort}
          disabled={loading || !idea}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating Short...' : 'Generate YouTube Short'}
        </button>

        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <video controls className="w-full rounded-lg shadow">
              <source src={shortUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
