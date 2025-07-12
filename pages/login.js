// File: pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import Link from 'next/link';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login – ClipGenius</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
        <form onSubmit={handleLogin} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Log In</h1>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 dark:text-gray-300">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 dark:bg-zinc-900"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-semibold transition"
          >
            Log In
          </button>

          <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <Link href="/register" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
