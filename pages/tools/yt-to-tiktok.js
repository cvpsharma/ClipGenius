// File: pages/tools/yt-to-tiktok.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function YouTubeToTikTok() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [status, setStatus] = useState('');
  const [convertedVideoUrl, setConvertedVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!youtubeUrl) return;

    setLoading(true);
    setStatus('Converting your YouTube video to TikTok format...');

    // Simulate conversion delay
    setTimeout(() => {
      setConvertedVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4');
      setStatus('Conversion complete! Preview below:');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">▶️ YouTube to TikTok Converter</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a YouTube video URL and we’ll trim and resize it into a vertical TikTok-style video.
        </p>

        <input
          type="text"
          placeholder="Paste YouTube video link here"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 bg-white dark:bg-zinc-800"
        />

        <button
          onClick={handleConvert}
          disabled={!youtubeUrl || loading}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Converting...' : 'Convert to TikTok'}
        </button>

        {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}

        {convertedVideoUrl && (
          <video
            src={convertedVideoUrl}
            controls
            className="mt-6 rounded-lg shadow-lg w-full aspect-[9/16]"
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
