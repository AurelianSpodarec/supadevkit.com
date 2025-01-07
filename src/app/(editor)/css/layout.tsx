import Header from "../_components/Header";

function EditorLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="relative flex flex-row flex-1 overflow-hidden">
        {children}
      </div>
    </div >
  )
}

export default EditorLayout
