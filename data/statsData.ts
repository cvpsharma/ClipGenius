export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly description: string;
}

export const statsData: StatItem[] = [
  {
    id: 'videos-created',
    value: '240,909+',
    description: 'videos created with ClipGenius'
  },
  {
    id: 'creators-using',
    value: '14,258+',
    description: 'creators using ClipGenius'
  },
  {
    id: 'creators-100k',
    value: '400+',
    description: 'creators reached 100k+ views'
  },
  {
    id: 'languages',
    value: '32 languages',
    description: 'and used in 68 countries'
  }
] as const;
