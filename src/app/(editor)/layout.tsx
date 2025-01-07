import AppProvider from "@/providers"
import { orbitron, poppins } from "@/theming/fonts"

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={`overflow-hidden h-full ${orbitron.variable} ${poppins.variable}`} >
      <AppProvider>
        {children}
      </AppProvider>
    </body>
  )
}

export default EditorLayout
