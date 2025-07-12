// File: pages/tools/snapchat-selfie.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function SnapchatSelfieVideoGenerator() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleGenerate = async () => {
    if (!image) return;

    setLoading(true);
    setStatus('Generating your selfie-based Snapchat video...');
    setVideoUrl(null);

    // Simulate AI generation
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4');
      setStatus('Your AI Snapchat-style video is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">👻 Snapchat Selfie Video Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Upload a selfie to generate a vertical AI video styled like Snapchat stories.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />

        {image && (
          <img
            src={image}
            alt="Selfie preview"
            className="rounded-lg shadow-md mb-4 w-48 h-48 object-cover"
          />
        )}

        <button
          onClick={handleGenerate}
          disabled={!image || loading}
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Video'}
        </button>

        {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}

        {videoUrl && (
          <video
            src={videoUrl}
            controls
            className="mt-6 rounded-lg shadow-lg w-full aspect-[9/16]"
          />
        )}
      </div>
    </ProtectedRoute>
  );
}
