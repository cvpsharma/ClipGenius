import React from 'react';
import { Link } from 'react-router-dom';
import { toolsData } from '../data/toolsData';

const ToolsPage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-euclid_0c3530">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
            AI Video Tools
          </span>
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          Discover our collection of powerful AI-powered video creation tools designed to help you create engaging content in minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolsData.map((tool) => (
          <div key={tool.id} className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-zinc-800 p-3 rounded-lg mr-4">
                  <img src={tool.icon} alt={tool.title} className="h-6 w-6" />
                </div>
                <h3 className="text-white text-xl font-medium">{tool.title}</h3>
              </div>
              <p className="text-slate-300 mb-6">{tool.description}</p>
              <Link 
                to={tool.href} 
                className="block text-center bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                Try Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;