export interface ToolItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: string;
  readonly containerClass: string;
}

export const toolsData: ToolItem[] = [
  {
    id: 'ai-tiktok-generator',
    title: 'AI TikTok Video Generator',
    description: 'Turn text into trendy, viral TikTok videos in a snap',
    href: '/tools/ai-tiktok-video-generator',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-11.svg",
    containerClass: "box-border h-full p-2"
  },
  {
    id: 'caption-generator',
    title: 'Add Caption to Video',
    description: 'Generate subtitles in 100+ languages with AI captions',
    href: '/tools/caption-generator',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-13.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'pdf-to-brainrot',
    title: 'PDF to Brainrot',
    description: 'Convert PDFs into attention-grabbing, scrollable videos',
    href: '/tools/pdf-to-brainrot',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-14.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'text-to-brainrot',
    title: 'Text to Brainrot',
    description: 'Turn your text into trendy, scrollable content with dynamic visuals',
    href: '/tools/text-to-brainrot',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-15.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'youtube-clip-maker',
    title: 'YouTube Clip Maker',
    description: 'Convert Youtube videos into bite-sized snackable content',
    href: '/tools/youtube-clip-maker',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-16.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'talking-avatar',
    title: 'AI Talking Avatar',
    description: 'Create lifelike talking avatars from text in seconds',
    href: '/tools/talking-avatar',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-17.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'video-podcast-generator',
    title: 'Video Podcast Generator',
    description: 'Transform your podcasts into visually engaging video content',
    href: '/tools/video-podcast-generator',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-18.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'ai-movie-maker',
    title: 'AI Movie Maker',
    description: 'Create studio-quality videos from text, no filming required',
    href: '/tools/ai-movie-maker',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-19.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  },
  {
    id: 'audio-to-video',
    title: 'Audio to Video',
    description: 'Make engaging videos from your podcasts, interviews, or any audio content',
    href: '/tools/audio-to-video',
    icon: "https://c.animaapp.com/md5zcwmrNJmqv0/assets/icon-20.svg",
    containerClass: "box-border h-full p-2 border-l-0 border-t border-solid border-white/10 md:border-l"
  }
] as const;
