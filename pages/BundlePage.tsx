import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Tool {
  name: string;
  description: string;
}

interface Bundle {
  id: string;
  title: string;
  price: string;
  description: string;
  tools: Tool[];
}

interface Bundles {
  [key: string]: Bundle;
}

const BundlePage = () => {
  const { bundleId } = useParams<{ bundleId: string }>();
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock bundle data
  const bundles: Bundles = {
    core: {
      id: 'core',
      title: 'Core Tools Bundle',
      price: '₹99',
      description: 'Essential video creation tools for beginners and casual creators.',
      tools: [
        { name: 'AI TikTok Video Generator', description: 'Create trending TikTok videos in minutes' },
        { name: 'Caption Generator', description: 'Add professional captions to your videos' },
        { name: 'Text to Brainrot', description: 'Convert text into engaging scrollable content' },
        { name: 'Talking Avatar', description: 'Create lifelike talking avatars from text' },
        { name: 'Audio to Video', description: 'Transform audio into visual content' }
      ]
    },
    social: {
      id: 'social',
      title: 'Social & Avatar Bundle',
      price: '₹149',
      description: 'Perfect for social media creators and influencers.',
      tools: [
        { name: 'AI TikTok Video Generator', description: 'Create trending TikTok videos in minutes' },
        { name: 'Caption Generator', description: 'Add professional captions to your videos' },
        { name: 'Talking Avatar', description: 'Create lifelike talking avatars from text' },
        { name: 'Twitter Video Tool', description: 'Convert tweets into engaging videos' },
        { name: 'Instagram Story Creator', description: 'Design eye-catching Instagram stories' },
        { name: 'Social Media Scheduler', description: 'Plan and schedule your content calendar' },
        { name: 'Hashtag Generator', description: 'Find the best hashtags for maximum reach' }
      ]
    },
    viral: {
      id: 'viral',
      title: 'Viral Content Bundle',
      price: '₹199',
      description: 'Everything you need to create content that gets noticed and shared.',
      tools: [
        { name: 'AI TikTok Video Generator', description: 'Create trending TikTok videos in minutes' },
        { name: 'Text to Brainrot', description: 'Convert text into engaging scrollable content' },
        { name: 'YouTube Clip Maker', description: 'Create bite-sized clips from longer videos' },
        { name: 'Talking Avatar', description: 'Create lifelike talking avatars from text' },
        { name: 'Trend Analyzer', description: 'Identify trending topics and formats' },
        { name: 'Viral Script Generator', description: 'Create scripts optimized for engagement' },
        { name: 'Thumbnail Creator', description: 'Design eye-catching thumbnails' },
        { name: 'Hook Generator', description: 'Create attention-grabbing video intros' },
        { name: 'Caption Generator', description: 'Add professional captions to your videos' },
        { name: 'Audio Enhancer', description: 'Improve audio quality automatically' }
      ]
    },
    educational: {
      id: 'educational',
      title: 'Educational Bundle',
      price: '₹129',
      description: 'Tools for educators, trainers, and knowledge creators.',
      tools: [
        { name: 'PDF to Video', description: 'Convert PDFs into engaging video presentations' },
        { name: 'Video Quiz Creator', description: 'Add interactive quizzes to your videos' },
        { name: 'Whiteboard Animation', description: 'Create explanatory whiteboard videos' },
        { name: 'Screen Recorder', description: 'Record and annotate your screen' }
      ]
    }
  };

  useEffect(() => {
    // Find the bundle based on the URL parameter
    if (bundleId && bundleId in bundles) {
      setBundle(bundles[bundleId]);
    }
    
    setLoading(false);
  }, [bundleId]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!bundle) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-2xl text-white mb-4">Bundle not found</h2>
        <p className="text-slate-300 mb-8">The bundle you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="inline-block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-2 px-6 rounded-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gradient-to-br from-[#0a0a0f] to-[#101020] border border-zinc-700/50 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-euclid_0c3530">{bundle.title}</h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg mb-6">{bundle.description}</p>
          <div className="inline-block bg-zinc-800 px-6 py-3 rounded-full">
            <span className="text-white text-3xl font-bold">{bundle.price}</span>
            <span className="text-zinc-400 ml-1">one-time payment</span>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Included Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bundle.tools.map((tool, index) => (
              <div key={index} className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700">
                <h3 className="text-white font-medium mb-2">{tool.name}</h3>
                <p className="text-slate-300 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-center"
          >
            Buy Now
          </Link>
          <Link 
            to="/" 
            className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-center"
          >
            Explore Other Bundles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BundlePage;