import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { name, email, password });
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-16">
      <div className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] border border-zinc-700/50 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-300">Join ClipGenius and start creating amazing videos</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-slate-300 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="John Doe"
              required
            />
          </div>

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
            <label htmlFor="password" className="block text-slate-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="••••••••"
              required
            />
            <p className="text-xs text-slate-400 mt-2">Password must be at least 8 characters long</p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-300">
            Already have an account?{' '}
            <Link to="/login" className="text-green-400 hover:text-green-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
