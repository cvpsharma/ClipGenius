// File: components/CookieConsent.js
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-100 dark:bg-zinc-800 text-sm p-4 rounded-lg shadow-md flex justify-between items-center">
      <p>We use cookies to improve your experience. By using ClipGenius, you accept our cookie policy.</p>
      <button
        onClick={acceptCookies}
        className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Accept
      </button>
    </div>
  );
}