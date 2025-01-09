import AppProvider from "@/providers"
import { orbitron, poppins } from "@/theming/fonts"

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from "./_components/Header";

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className={`overflow-hidden h-full ${orbitron.variable} ${poppins.variable} ${GeistSans.variable} ${GeistMono.variable} font-geistSans`} >
      <AppProvider>


        <div className="flex flex-col w-full h-screen">
          <Header />
          <div className="relative flex flex-row flex-1 overflow-hidden">
            {children}
          </div>
        </div >


      </AppProvider>
    </body>
  )
}

export default EditorLayout
