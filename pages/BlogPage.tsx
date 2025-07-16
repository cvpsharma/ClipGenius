import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Creating Viral TikTok Videos",
      excerpt: "Learn the secrets to creating TikTok videos that get millions of views and shares.",
      date: "June 15, 2023",
      author: "Alex Johnson",
      category: "TikTok",
      image: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-1"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Video Creation",
      excerpt: "Discover how artificial intelligence is making video creation faster, easier, and more accessible than ever before.",
      date: "July 22, 2023",
      author: "Maria Garcia",
      category: "AI Technology",
      image: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-2"
    },
    {
      id: 3,
      title: "The Psychology of Engaging Video Content",
      excerpt: "Understanding what makes viewers stop scrolling and engage with your videos.",
      date: "August 5, 2023",
      author: "Sam Wilson",
      category: "Content Strategy",
      image: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-3"
    },
    {
      id: 4,
      title: "From Zero to 100K Followers: A Creator's Journey",
      excerpt: "An interview with a content creator who built a massive following using ClipGenius tools.",
      date: "September 12, 2023",
      author: "Jamie Chen",
      category: "Success Stories",
      image: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-4"
    },
    {
      id: 5,
      title: "Video Marketing Trends for 2023",
      excerpt: "Stay ahead of the curve with these emerging trends in video marketing.",
      date: "October 3, 2023",
      author: "Chris Taylor",
      category: "Marketing",
      image: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-5"
    },
    {
      id: 6,
      title: "How to Create Professional Videos on a Budget",
      excerpt: "Tips and tricks for creating high-quality videos without breaking the bank.",
      date: "November 18, 2023",
      author: "Jordan Smith",
      category: "Production Tips",
      image: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/image-6"
    }
  ];

  const categories = [
    "All Categories",
    "TikTok",
    "AI Technology",
    "Content Strategy",
    "Success Stories",
    "Marketing",
    "Production Tips"
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-euclid_0c3530">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
            ClipGenius Blog
          </span>
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          Tips, tutorials, and insights to help you create amazing videos and grow your audience.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              index === 0
                ? "bg-green-500 text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video bg-zinc-800 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium bg-zinc-700 text-white px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400 ml-3">
                  {post.date}
                </span>
              </div>
              <h3 className="text-white text-xl font-medium mb-2">{post.title}</h3>
              <p className="text-slate-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">By {post.author}</span>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
