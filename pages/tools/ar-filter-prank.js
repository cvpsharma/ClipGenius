// File: pages/tools/ar-filter-prank.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ARFilterPrank() {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setStatus('Creating your prank AR filter video...');
    setVideoUrl(null);

    // Simulate API call delay
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/movie.mp4'); // Placeholder
      setStatus('Here is your prank video! 😄');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🎭 AR Filter Prank Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a funny scenario and generate a prank video using a fake AR filter.
        </p>

        <textarea
          rows={4}
          placeholder="E.g., Make someone appear with dog ears in a meeting..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!inputText || loading}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Prank Video'}
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
