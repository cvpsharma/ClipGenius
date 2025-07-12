// File: pages/tools/youtube-clip-maker.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function YouTubeClipMaker() {
  const [url, setUrl] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [loading, setLoading] = useState(false);
  const [clipUrl, setClipUrl] = useState(null);

  const handleClip = async () => {
    if (!url || !start || !end) return;
    setLoading(true);
    setClipUrl(null);

    // Simulated API delay
    setTimeout(() => {
      setClipUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with actual clip URL
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🎬 YouTube Clip Maker</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Paste a YouTube video URL and choose the start and end time to create a short clip.
        </p>

        <input
          type="text"
          placeholder="YouTube Video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg dark:bg-zinc-800 dark:text-white"
        />

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Start Time (e.g., 00:10)"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:text-white"
          />
          <input
            type="text"
            placeholder="End Time (e.g., 00:30)"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-zinc-800 dark:text-white"
          />
        </div>

        <button
          onClick={handleClip}
          disabled={loading || !url || !start || !end}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Creating Clip...' : 'Create Clip'}
        </button>

        {clipUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Clip Preview</h2>
            <video controls className="w-full rounded-lg shadow">
              <source src={clipUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
