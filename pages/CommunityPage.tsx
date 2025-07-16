import React from 'react';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
  const featuredCreations = [
    {
      id: 1,
      title: "Summer Travel Montage",
      creator: "Alex Johnson",
      views: "124K",
      likes: "8.2K",
      thumbnail: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-1"
    },
    {
      id: 2,
      title: "Coffee Shop Ambience",
      creator: "Maria Garcia",
      views: "89K",
      likes: "5.7K",
      thumbnail: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-2"
    },
    {
      id: 3,
      title: "Tech Review Highlights",
      creator: "Sam Wilson",
      views: "210K",
      likes: "12.3K",
      thumbnail: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-3"
    },
    {
      id: 4,
      title: "Cooking Tutorial",
      creator: "Jamie Chen",
      views: "156K",
      likes: "9.8K",
      thumbnail: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-4"
    },
    {
      id: 5,
      title: "Fitness Motivation",
      creator: "Chris Taylor",
      views: "178K",
      likes: "11.5K",
      thumbnail: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-5"
    },
    {
      id: 6,
      title: "Urban Photography",
      creator: "Jordan Smith",
      views: "92K",
      likes: "6.4K",
      thumbnail: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-6"
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-euclid_0c3530">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
            Community Creations
          </span>
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          Explore amazing videos created by the ClipGenius community. Get inspired and see what's possible with our tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCreations.map((creation) => (
          <div key={creation.id} className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video bg-zinc-800 overflow-hidden">
              <img 
                src={creation.thumbnail} 
                alt={creation.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-medium mb-2">{creation.title}</h3>
              <p className="text-slate-400 mb-4">By {creation.creator}</p>
              <div className="flex justify-between text-sm text-slate-400">
                <span className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {creation.views} views
                </span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {creation.likes} likes
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link 
          to="/login" 
          className="inline-block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
        >
          Join Community & Share Your Creations
        </Link>
      </div>
    </div>
  );
};

export default CommunityPage;
