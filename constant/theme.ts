// theme.ts
export type AppTheme = {
  name: 'light' | 'dark';
  colors: {
    background: string;
    text: string;
    card: string;
    border: string;
    primary: string;
    muted: string;
  };
  statusBarStyle: 'dark-content' | 'light-content';
};

export const lightTheme: AppTheme = {
  name: 'light',
  colors: {
    background: '#FFFFFF',
    text: '#0A0A0A',
    card: '#F6F6F7',
    border: '#E6E6E6',
    primary: '#2563EB',
    muted: '#6B7280',
  },
  statusBarStyle: 'dark-content',
};

export const darkTheme: AppTheme = {
  name: 'dark',
  colors: {
    background: '#0B0B0D',
    text: '#F3F4F6',
    card: '#141417',
    border: '#232329',
    primary: '#60A5FA',
    muted: '#9CA3AF',
  },
  statusBarStyle: 'light-content',
};
