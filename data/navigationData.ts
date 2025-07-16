export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly className: string;
}

export const navigationData: NavigationItem[] = [
  {
    id: 'community',
    label: 'Community Creations',
    href: '/community',
    className: "relative text-base box-border tracking-[0.4px] leading-6 min-h-0 min-w-0 text-left decoration-gray-500 invisible py-4 md:text-sm md:tracking-[0.35px] md:leading-5 md:min-h-[auto] md:min-w-[auto] md:visible"
  },
  {
    id: 'tools',
    label: 'Free AI Video Tools',
    href: '/tools',
    className: "relative text-base box-border tracking-[0.4px] leading-6 min-h-0 min-w-0 text-left decoration-gray-500 invisible py-4 border-t border-solid border-white/10 md:text-sm md:tracking-[0.35px] md:leading-5 md:min-h-[auto] md:min-w-[auto] md:visible md:border-t-0"
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
    className: "relative text-base box-border tracking-[0.4px] leading-6 min-h-0 min-w-0 text-left decoration-gray-500 invisible py-4 border-t border-solid border-white/10 md:text-sm md:tracking-[0.35px] md:leading-5 md:min-h-[auto] md:min-w-[auto] md:visible md:border-t-0"
  },
  {
    id: 'signin',
    label: 'Sign in',
    href: '/login',
    className: "text-base box-border tracking-[0.4px] leading-6 min-h-0 min-w-0 text-left invisible py-4 border-t border-solid border-white/10 md:text-sm md:tracking-[0.35px] md:leading-5 md:min-h-[auto] md:min-w-[auto] md:visible md:border-t-0"
  }
] as const;
