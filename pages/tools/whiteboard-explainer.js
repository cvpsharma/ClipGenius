// File: pages/tools/whiteboard-explainer.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function WhiteboardExplainerGenerator() {
  const [concept, setConcept] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!concept.trim()) return;
    setLoading(true);
    setStatus('Generating whiteboard-style explainer...');
    setVideoUrl(null);

    // Simulated generation
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Placeholder whiteboard video
      setStatus('Whiteboard explainer video is ready! 🧑‍🏫✏️');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🧑‍🏫 Whiteboard Explainer Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a concept or process, and generate an AI-powered whiteboard-style video explainer.
        </p>

        <input
          type="text"
          placeholder="E.g., Water Cycle or Supply Chain Management"
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!concept || loading}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Explainer'}
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
