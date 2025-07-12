// File: pages/tools/podcast-to-video.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function PodcastToVideoPage() {
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState(null);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleGenerate = async () => {
    if (!audioFile) return;
    setLoading(true);
    setVideoURL(null);

    // Simulate processing delay
    setTimeout(() => {
      setVideoURL('https://www.w3schools.com/html/mov_bbb.mp4'); // placeholder video
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🎙️ Podcast to Video</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Turn your audio podcast into a visually engaging video using AI visuals and waveforms.
        </p>

        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="mb-4 block w-full"
        />

        <button
          onClick={handleGenerate}
          disabled={!audioFile || loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Video'}
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
