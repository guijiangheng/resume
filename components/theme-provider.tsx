'use client';

import type React from 'react';

import { ThemeProvider } from 'next-themes';

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ThemeProvider
    enableSystem={true}
    attribute="class"
    storageKey="theme"
    defaultTheme="system"
  >
    {children}
  </ThemeProvider>
);
