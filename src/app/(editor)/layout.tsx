import AppProvider from "@/providers"

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={`overflow-hidden h-full`}>
      <AppProvider>
        {children}
      </AppProvider>
    </body>
  )
}

export default EditorLayout
