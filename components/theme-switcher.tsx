'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/cn';

const buttons = [
  {
    icon: Monitor,
    theme: 'system',
  },
  {
    icon: Moon,
    theme: 'dark',
  },
  {
    icon: Sun,
    theme: 'light',
  },
];

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <span className={cn('inline-flex gap-1', className)}>
      {buttons.map((x) => (
        <button
          key={x.theme}
          title={x.theme}
          onClick={() => {
            setTheme(x.theme);
          }}
          className={cn(
            'rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground',
            theme === x.theme && 'text-foreground',
          )}
        >
          <x.icon size={20} />
        </button>
      ))}
    </span>
  );
};
