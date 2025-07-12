// File: pages/tools/subway-surfers-meme.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SubwaySurfersMemeGenerator() {
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!caption.trim()) return;
    setLoading(true);
    setStatus('Generating your meme reel...');
    setVideoUrl(null);

    // Simulated generation delay
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // sample video
      setStatus('Here is your Subway Surfers meme video!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🚇 Subway Surfers Meme Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Overlay viral meme captions onto Subway Surfers gameplay. Perfect for reaction reels!
        </p>

        <textarea
          rows={4}
          placeholder="Enter your meme or rant text here..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!caption || loading}
          className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Meme Reel'}
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
