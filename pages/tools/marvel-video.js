// File: pages/tools/marvel-video.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function MarvelVideoGenerator() {
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);

  const handleGenerate = async () => {
    if (!script.trim()) return;
    setLoading(true);
    setStatus('Generating Marvel-style video...');
    setVideoUrl(null);

    // Simulated generation delay
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4');
      setStatus('Your Marvel-style video is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🦸 Marvel-style Video Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter your text and generate a video with dramatic Marvel-style visuals and music.
        </p>

        <textarea
          rows={5}
          placeholder="Type your epic script or message..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!script || loading}
          className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Marvel Video'}
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
