// File: pages/tools/text-to-video.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function TextToVideoPage() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setVideoURL(null);

    // Simulate generation delay
    setTimeout(() => {
      setVideoURL('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with real API
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">📝 Text to Video</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Generate a full-length video from your written content or script.
        </p>

        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your video script or content here..."
          className="w-full border rounded-lg p-3 mb-4 dark:bg-zinc-800 dark:text-white"
        />

        <button
          onClick={handleGenerate}
          disabled={!text || loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating Video...' : 'Generate Video'}
        </button>

        {videoURL && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <video controls className="w-full rounded-lg shadow">
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
