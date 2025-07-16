import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-16">
      <div className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] border border-zinc-700/50 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-300">Sign in to your ClipGenius account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-slate-300">Password</label>
              <a href="#" className="text-green-400 text-sm hover:text-green-300">Forgot password?</a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-400 hover:text-green-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;