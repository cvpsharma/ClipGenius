// File: pages/tools/study-quest-arena.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function StudyQuestArena() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setStatus('Generating gamified learning video...');
    setVideoUrl(null);

    // Simulated API call
    setTimeout(() => {
      setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4'); // Placeholder video
      setStatus('Here is your Study Quest video! 🎓🕹️');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🎓 Study Quest Arena</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enter a subject or exam topic to generate a fun, gamified educational video.
        </p>

        <input
          type="text"
          placeholder="E.g., Physics: Newton’s Laws"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!topic || loading}
          className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Learning Video'}
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
