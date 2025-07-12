// File: pages/tools/caption-adder.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CaptionAdder() {
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captionedVideoUrl, setCaptionedVideoUrl] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setCaptionedVideoUrl(null);
  };

  const generateCaptions = async () => {
    if (!videoFile) return;
    setLoading(true);

    // Simulate captioning process
    setTimeout(() => {
      setCaptionedVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with actual output
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">💬 Add Captions to Video</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Upload a video and automatically generate AI-powered captions.
        </p>

        <input
          type="file"
          accept="video/*"
          onChange={handleUpload}
          className="mb-4"
        />

        <button
          onClick={generateCaptions}
          disabled={loading || !videoFile}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating Captions...' : 'Add Captions'}
        </button>

        {captionedVideoUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Captioned Video</h2>
            <video controls className="w-full rounded-lg shadow">
              <source src={captionedVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
