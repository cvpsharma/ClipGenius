// File: pages/tools/amazon-product-video.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AmazonProductVideo() {
  const [productLink, setProductLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);

  const handleGenerate = async () => {
    if (!productLink.trim()) return;
    setLoading(true);
    setStatus('Generating product video...');
    setVideoUrl(null);

    // Simulated API call delay
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4');
      setStatus('Your Amazon product video is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🛒 Amazon Product Video Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Paste an Amazon product URL and generate an engaging product demo or review video.
        </p>

        <input
          type="text"
          placeholder="https://www.amazon.in/dp/PRODUCT_ID"
          value={productLink}
          onChange={(e) => setProductLink(e.target.value)}
          className="w-full p-2 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!productLink || loading}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Video'}
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
