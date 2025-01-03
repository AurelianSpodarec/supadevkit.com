'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { DashboardThemeNames } from './themeNames';
import { TwitterThemeProvider } from './tw-theme-provider';

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;
const themeValues = Object.values(DashboardThemeNames);

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={themeValues}
    >
      <TwitterThemeProvider>
        {children}
      </TwitterThemeProvider>
    </NextThemesProvider>
  );
}
