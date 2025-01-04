import AppProvider from "@/providers"

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={`overflow-hidden h-full`}>
      <AppProvider>
        <div className="h-screen">
          {children}
        </div>
      </AppProvider>
    </body>
  )
}

export default EditorLayout
