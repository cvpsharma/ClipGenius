// File: pages/tools/ai-teacher.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AITeacherVoiceover() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setStatus('Generating teacher-style voiceover...');
    setAudioUrl(null);

    // Simulated generation
    setTimeout(() => {
      setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder audio
      setStatus('Voiceover is ready 🎙️👩‍🏫');
      setLoading(false);
    }, 2500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🎙️ AI Teacher Voiceover</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Paste your educational script and let AI generate a calm, clear teacher-like voiceover.
        </p>

        <textarea
          rows={6}
          placeholder="Paste your script or concept explanation here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 rounded border dark:bg-zinc-800 dark:border-zinc-600"
        />

        <button
          onClick={handleGenerate}
          disabled={!text || loading}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Voiceover'}
        </button>

        {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}

        {audioUrl && (
          <audio controls className="mt-6 w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </ProtectedRoute>
  );
}
