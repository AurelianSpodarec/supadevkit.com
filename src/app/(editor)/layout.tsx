import AppProvider from "@/providers"
import { orbitron, poppins } from "@/theming/fonts"

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from "./_components/Header";

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className={`overflow-hidden h-full ${orbitron.variable} ${poppins.variable} ${GeistSans.variable} ${GeistMono.variable} font-geistSans`}>
      <AppProvider>
        <div className="absolute top-0 right-0 w-full h-full" style={{ background: "radial-gradient(circle at 35% 50%, rgb(0 4 47 / 53%) 0, #fd000003 45%), radial-gradient(circle at 65% 14%, rgb(106 32 170 / 24%) 0, #000000 45%)" }}></div>
        <div className="absolute right-0 -z-10 h-[200px] color-[#4d1f58] opacity-30 top-[-40px] left-[35%] [mask-image:linear-gradient(transparent,white)]"><svg aria-hidden="true" className="absolute inset-0 h-full w-full"><defs><pattern id=":S6:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:S6:)"></rect></svg></div>

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
