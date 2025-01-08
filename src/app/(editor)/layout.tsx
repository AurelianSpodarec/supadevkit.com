import AppProvider from "@/providers"
import { orbitron, poppins } from "@/theming/fonts"

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className={`overflow-hidden h-full ${orbitron.variable} ${poppins.variable} ${GeistSans.variable} ${GeistMono.variable} font-geistSans`} >
      <AppProvider>
        {children}
      </AppProvider>
    </body>
  )
}

export default EditorLayout
