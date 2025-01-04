import AppProvider from "@/providers"
import Content from "../_components/Content"
import KitStyles from "../_components/KitStyles"
import Header from "../_components/Header"

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex h-full flex-row overflow-hidden relative">
        {/* <Navigation /> */}
        <div className="flex w-full flex-row">
          {/* <Content className="flex grow flex-col overflow-hidden relative h-full"> */}
            {children}
          {/* </Content> */}
          {/* <KitStyles /> */}
        </div>
      </div>
    </div>
  )
}

export default EditorLayout
