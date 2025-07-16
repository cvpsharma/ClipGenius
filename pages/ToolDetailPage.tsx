import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toolsData, ToolItem } from '../data/toolsData';

const ToolDetailPage = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const [tool, setTool] = useState<ToolItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the tool based on the URL parameter
    const foundTool = toolsData.find(t => t.id === toolId);
    
    if (foundTool) {
      setTool(foundTool);
    }
    
    setLoading(false);
  }, [toolId]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-2xl text-white mb-4">Tool not found</h2>
        <p className="text-slate-300 mb-8">The tool you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/tools" 
          className="inline-block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-2 px-6 rounded-lg transition-all duration-300"
        >
          Browse All Tools
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] border border-zinc-700/50 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <div className="flex items-center mb-8">
          <div className="bg-zinc-800 p-4 rounded-lg mr-6">
            <img src={tool.icon} alt={tool.title} className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-euclid_0c3530">{tool.title}</h1>
        </div>
        
        <p className="text-slate-300 text-lg mb-8">{tool.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-800/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-300">Easy-to-use interface</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-300">AI-powered content generation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-300">Multiple export options</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-300">Customizable templates</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-300">Cloud storage for your projects</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-zinc-800/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-green-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                <div>
                  <h3 className="text-white font-medium">Input Your Content</h3>
                  <p className="text-slate-300 text-sm">Upload your content or use our AI to generate it.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                <div>
                  <h3 className="text-white font-medium">Customize Your Video</h3>
                  <p className="text-slate-300 text-sm">Choose templates, styles, and effects to match your brand.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                <div>
                  <h3 className="text-white font-medium">Generate & Preview</h3>
                  <p className="text-slate-300 text-sm">Our AI creates your video in seconds. Preview and make adjustments.</p>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-500 text-black font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                <div>
                  <h3 className="text-white font-medium">Export & Share</h3>
                  <p className="text-slate-300 text-sm">Download your video or share directly to social platforms.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-center"
          >
            Try This Tool Now
          </Link>
          <Link 
            to="/tools" 
            className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-center"
          >
            Explore Other Tools
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;
