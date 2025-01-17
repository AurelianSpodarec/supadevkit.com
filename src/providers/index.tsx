'use client'

import { ThemeProvider } from '@/theming/theme-provider'

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
  )
}

export default AppProvider
