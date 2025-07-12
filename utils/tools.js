const tools = [
  // --- Core Tools ---
  {
    id: 'podcast-to-video',
    name: 'Podcast to Video',
    description: 'Turn audio podcasts into engaging visual content.',
    route: '/tools/podcast-to-video',
    category: '🎙️ Core Tools',
    plans: ['free', 'pro', 'enterprise']
  },
  {
    id: 'text-to-reels',
    name: 'Text to Reels',
    description: 'Convert text into short vertical reels with music.',
    route: '/tools/text-to-reels',
    category: '🎙️ Core Tools',
    plans: ['free', 'pro', 'enterprise']
  },
  {
    id: 'text-to-video',
    name: 'Text to Video',
    description: 'Generate full videos from written scripts.',
    route: '/tools/text-to-video',
    category: '🎙️ Core Tools',
    plans: ['free', 'pro', 'enterprise']
  },
  {
    id: 'youtube-clip-maker',
    name: 'YouTube Clip Maker',
    description: 'Trim and style clips from long YouTube videos.',
    route: '/tools/youtube-clip-maker',
    category: '🎙️ Core Tools',
    plans: ['free', 'pro', 'enterprise']
  },
  {
    id: 'youtube-shorts',
    name: 'YouTube Shorts',
    description: 'Instantly create YouTube Shorts from your ideas.',
    route: '/tools/youtube-shorts',
    category: '🎙️ Core Tools',
    plans: ['free', 'pro', 'enterprise']
  },

  // --- Social & Avatar Tools ---
  {
    id: 'tiktok-generator',
    name: 'AI TikTok Video Generator',
    description: 'Generate viral TikTok-style videos automatically.',
    route: '/tools/tiktok-generator',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'caption-adder',
    name: 'Add Caption to Video',
    description: 'Auto-generate and add subtitles or captions.',
    route: '/tools/caption-adder',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'ai-talking-avatar',
    name: 'AI Talking Avatar',
    description: 'Generate a talking avatar from your text.',
    route: '/tools/ai-talking-avatar',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'ai-face-swap',
    name: 'AI Face Swap',
    description: 'Swap faces in any video or image using AI.',
    route: '/tools/ai-face-swap',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'yt-to-tiktok',
    name: 'YouTube to TikTok Converter',
    description: 'Repurpose long YouTube videos into TikToks.',
    route: '/tools/yt-to-tiktok',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'insta-reel-generator',
    name: 'Instagram Reel Generator',
    description: 'AI-generated Instagram Reels with trendy music.',
    route: '/tools/insta-reel-generator',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'snapchat-selfie',
    name: 'Snapchat Selfie Video Generator',
    description: 'Create vertical AI videos from selfies.',
    route: '/tools/snapchat-selfie',
    category: '📱 Social & Avatar Tools',
    plans: ['pro', 'enterprise']
  },

  // --- Niche & Viral Tools ---
  {
    id: 'ai-debate-generator',
    name: 'AI Debate Generator',
    description: 'Create a debate-style video with opposing AI avatars.',
    route: '/tools/ai-debate-generator',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'amazon-product-video',
    name: 'Amazon Product Video Generator',
    description: 'Make engaging product review/demo videos.',
    route: '/tools/amazon-product-video',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'marvel-video',
    name: 'Marvel-style Video Generator',
    description: 'Create reels with Marvel-like effects and themes.',
    route: '/tools/marvel-video',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'squid-game-video',
    name: 'Squid Game Theme Video',
    description: 'Generate videos themed around Squid Game aesthetics.',
    route: '/tools/squid-game-video',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'subway-surfers-meme',
    name: 'Subway Surfers Meme Generator',
    description: 'Overlay meme commentary on gameplay reels.',
    route: '/tools/subway-surfers-meme',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'geeta-gyan-reel',
    name: 'Geeta Gyaan Reels',
    description: 'Spiritual and philosophical reels from Geeta shlokas.',
    route: '/tools/geeta-gyan-reel',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'shiva-stories-video',
    name: 'Lord Shiva Stories (Text-to-Video)',
    description: 'Mythological stories converted to visuals.',
    route: '/tools/shiva-stories-video',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'life-hacks-explainer',
    name: 'AI Life Hacks Explainer',
    description: 'Create educational explainer reels with hacks.',
    route: '/tools/life-hacks-explainer',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'ar-filter-prank',
    name: 'AR Filter Prank Video Generator',
    description: 'Fake AR filters for fun and prank reels.',
    route: '/tools/ar-filter-prank',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },
  {
    id: 'study-quest-arena',
    name: 'Study Quest Arena',
    description: 'Gamified educational videos for exams.',
    route: '/tools/study-quest-arena',
    category: '🔥 Niche & Viral Tools',
    plans: ['pro', 'enterprise']
  },

  // --- Educational & Developer Tools ---
  {
    id: 'coding-tutorial',
    name: 'AI Coding Tutorial Generator',
    route: '/tools/coding-tutorial',
    category: '🎓 Educational & Developer Tools',
    plans: ['pro', 'enterprise'],
    description: 'Auto-create coding tutorials with AI.'
  },
  {
    id: 'educational-shorts',
    name: 'AI Educational Shorts Maker',
    route: '/tools/educational-shorts',
    category: '🎓 Educational & Developer Tools',
    plans: ['pro', 'enterprise'],
    description: 'Short educational videos for concepts and tips.'
  },
  {
    id: 'whiteboard-explainer',
    name: 'Whiteboard Explainer Generator',
    route: '/tools/whiteboard-explainer',
    category: '🎓 Educational & Developer Tools',
    plans: ['pro', 'enterprise'],
    description: 'Generate whiteboard-style explainer videos.'
  },
  {
    id: 'ai-teacher',
    name: 'AI Teacher Voiceover Tool',
    route: '/tools/ai-teacher',
    category: '🎓 Educational & Developer Tools',
    plans: ['pro', 'enterprise'],
    description: 'AI voiceover generator for lectures and guides.'
  }
];

export default tools;
