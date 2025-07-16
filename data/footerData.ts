export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface FooterData {
  readonly solutions: FooterLink[];
  readonly products: FooterLink[];
  readonly tools: FooterLink[];
  readonly additionalTools: FooterLink[];
}

export const footerData: FooterData = {
  solutions: [
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'api', label: 'API', href: "https://documenter.getpostman.com/view/36975521/2sA3kPo4BR" },
    { id: 'affiliates', label: 'Become an Affiliate', href: '/affiliates' }
  ],
  products: [
    { id: 'tiktok-script', label: 'TikTok Script Generator', href: '/tiktok-script-generator' },
    { id: 'youtube-script', label: 'Youtube Shorts Script Generator', href: '/youtube-short-script-generator' },
    { id: 'ai-script', label: 'AI Script Generator', href: '/ai-script-generator' },
    { id: 'video-script', label: 'Video Script Generator', href: '/video-script-generator' },
    { id: 'tiktok-finder', label: 'Search TikTok Videos', href: '/tiktok-video-finder' },
    { id: 'instagram-caption', label: 'Instagram Caption Generator', href: '/caption-generator/instagram-caption-generator' },
    { id: 'tiktok-caption', label: 'TikTok Caption Generator', href: '/caption-generator/tiktok-caption-generator' },
    { id: 'youtube-description', label: 'Youtube Description Generator', href: '/caption-generator/youtube-description-generator' },
    { id: 'youtube-title', label: 'Youtube Title Generator', href: '/caption-generator/youtube-title-generator' }
  ],
  tools: [
    { id: 'ai-tiktok-generator', label: 'AI TikTok Video Generator', href: '/tools/ai-tiktok-video-generator' },
    { id: 'caption-generator', label: 'Add Caption to Video', href: '/tools/caption-generator' },
    { id: 'pdf-to-brainrot', label: 'PDF to Brainrot', href: '/tools/pdf-to-brainrot' },
    { id: 'text-to-brainrot', label: 'Text to Brainrot', href: '/tools/text-to-brainrot' },
    { id: 'youtube-clip-maker', label: 'YouTube Clip Maker', href: '/tools/youtube-clip-maker' },
    { id: 'talking-avatar', label: 'AI Talking Avatar', href: '/tools/talking-avatar' },
    { id: 'video-podcast-generator', label: 'Video Podcast Generator', href: '/tools/video-podcast-generator' },
    { id: 'ai-movie-maker', label: 'AI Movie Maker', href: '/tools/ai-movie-maker' },
    { id: 'cinematic-videos', label: 'Cinematic Videos', href: '/tools/ai-cinematic-video' },
    { id: 'audio-to-video', label: 'Audio to Video', href: '/tools/audio-to-video' },
    { id: 'music-to-video', label: 'Music to Video', href: '/tools/ai-music-video-generator' },
    { id: 'instrumental-visualizer', label: 'Instrumental Music Visualizer', href: '/tools/instrumental-music-to-video' },
    { id: 'cartoon-video', label: 'Create Cartoon Video', href: '/tools/create-cartoon-video' },
    { id: 'video-quiz', label: 'Create Video Quiz', href: '/tools/create-video-quiz' },
    { id: 'twitter-video', label: 'Tweet / 𝕏 to Video', href: '/tools/twitter-video-tool' }
  ],
  additionalTools: [
    { id: 'ai-ad-generator', label: 'AI Ad Generator', href: '/tools/ai-ad-generator' },
    { id: 'minecraft-parkour', label: 'Create Minecraft Parkour Video', href: '/tools/minecraft-parkour-video' },
    { id: 'ai-video-generator', label: 'AI Video Generator', href: '/tools/ai-video-generator' },
    { id: 'anime-generator', label: 'Anime Video Generator', href: '/tools/ai-anime-video-generator' },
    { id: 'pixar-generator', label: 'Disney Pixar Video Generator', href: '/tools/pixar-ai' },
    { id: 'celebrity-generator', label: 'AI Celebrity Video Generator', href: '/tools/ai-celebrity-video-generator' },
    { id: 'presentation-maker', label: 'AI Video Presentation Maker', href: '/tools/ai-video-presentation-maker' },
    { id: 'pov-generator', label: 'Create POV Videos', href: '/tools/pov-video-generator' },
    { id: 'superhero-generator', label: 'AI Superhero Video Generator', href: '/tools/ai-superhero-generator' },
    { id: 'news-generator', label: 'AI News Video Generator', href: '/tools/ai-news-video-generator' },
    { id: 'animal-generator', label: 'AI Animal Video Generator', href: '/tools/ai-animal-video-generator' },
    { id: 'snapchat-selfie', label: 'Snapchat Selfie Video Generator', href: '/tools/snapchat-selfie-video-generator' },
    { id: 'prompt-to-video', label: 'Prompt to Video', href: '/tools/prompt-to-video' },
    { id: 'italian-brainrot', label: 'Italian Brainrot Generator', href: '/tools/italian-brainrot-generator' },
    { id: 'talking-baby', label: 'Talking Baby AI Generator', href: '/tools/talking-baby-ai-generator' },
    { id: 'birthday-message', label: 'Birthday Video Message Generator', href: '/tools/birthday-video-message-generator' }
  ]
} as const;
