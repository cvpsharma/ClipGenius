// File: pages/tools/ai-face-swap.js

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AIFaceSwap() {
  const [faceImage, setFaceImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFaceUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFaceImage(URL.createObjectURL(file));
  };

  const handleTargetUpload = (e) => {
    const file = e.target.files[0];
    if (file) setTargetImage(URL.createObjectURL(file));
  };

  const handleSwap = async () => {
    if (!faceImage || !targetImage) return;
    setLoading(true);

    // Simulate face swap API call
    setTimeout(() => {
      setResultUrl('https://via.placeholder.com/600x400?text=Face+Swapped+Result');
      setLoading(false);
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">🧠 AI Face Swap</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Upload a face image and a target image to perform an AI-powered face swap.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Face Image</label>
            <input type="file" accept="image/*" onChange={handleFaceUpload} className="mb-2" />
            {faceImage && <img src={faceImage} alt="Face" className="rounded shadow-md" />}
          </div>

          <div>
            <label className="block font-medium mb-1">Target Image</label>
            <input type="file" accept="image/*" onChange={handleTargetUpload} className="mb-2" />
            {targetImage && <img src={targetImage} alt="Target" className="rounded shadow-md" />}
          </div>
        </div>

        <button
          onClick={handleSwap}
          disabled={!faceImage || !targetImage || loading}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Swapping Faces...' : 'Swap Faces'}
        </button>

        {resultUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Swapped Image</h2>
            <img src={resultUrl} alt="Swapped Result" className="rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
