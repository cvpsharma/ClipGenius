// File: pages/tools/life-hacks-explainer.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function LifeHacksExplainer() {
  const [hackText, setHackText] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!hackText.trim()) return;
    setLoading(true);
    setStatus('Creating explainer video for your life hack...');
    setVideoUrl(null);

    // Simulate API call
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Placeholder video
      setStatus('Your AI explainer video is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🧠 AI Life Hacks Explainer</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Share a life hack and get a short AI-generated explainer video that's perfect for reels.
        </p>

        <textarea
          rows={4}
          placeholder="E.g., Put your phone in a cup to amplify the sound..."
          value={hackText}
          onChange={(e) => setHackText(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!hackText || loading}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
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
// File: pages/tools/life-hacks-explainer.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function LifeHacksExplainer() {
  const [hackText, setHackText] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!hackText.trim()) return;
    setLoading(true);
    setStatus('Creating explainer video for your life hack...');
    setVideoUrl(null);

    // Simulate API call
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Placeholder video
      setStatus('Your AI explainer video is ready!');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🧠 AI Life Hacks Explainer</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Share a life hack and get a short AI-generated explainer video that's perfect for reels.
        </p>

        <textarea
          rows={4}
          placeholder="E.g., Put your phone in a cup to amplify the sound..."
          value={hackText}
          onChange={(e) => setHackText(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!hackText || loading}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
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
