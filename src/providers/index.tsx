'use client'

import { ThemeProvider } from '@/theming/theme-provider'
// import { ReduxProvider } from './redux-provider'

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    // <ReduxProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    // </ReduxProvider>
  )
}

export default AppProvider
