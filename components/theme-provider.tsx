'use client'

import type React from 'react'

import { ThemeProvider, useTheme } from 'next-themes'

import { usePostMessage } from '@/lib/use-postmessage'

const ThemePoster = () => {
  const { theme } = useTheme()
  usePostMessage('PARENT_CONFIG', { theme })

  return null
}

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" storageKey="theme" defaultTheme="system">
      <ThemePoster />
      {children}
    </ThemeProvider>
  )
}
