import AppProvider from "@/providers"
import Content from "../_components/Content"
import KitStyles from "../_components/KitStyles"
import Header from "../_components/Header"

function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-screen">
      <header className="border w-full">
        Header
      </header>
      <div className="border border-red-500 flex flex-row flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="border border-green-500 flex flex-col w-full h-full overflow-hidden">
          <main className="bg-purple-500 flex-1 overflow-auto">
            Content
            {/* Uncomment this to add an image */}
            <img
              src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Sample"
            />
          </main>
          <footer className="bg-blue-500">
            Footer
          </footer>
        </div>

        {/* Sidebar */}
        <aside className="w-[300px] overflow-auto h-full">
          Sidebar
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          Additional content that overflows...
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </aside>
      </div>
    </div>

    // <div className="flex flex-col h-full w-full">
    //   <Header />
    //   <div className="flex grow flex-row overflow-hidden relative h-full">
    //     {/* <Navigation /> */}
    //     <div className="flex grow flex-col overflow-hidden relative h-full">
    //       <main className="flex flex-col grow">
    //         <img
    //           src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
    //           style={{ maxWidth: "100%", height: "auto" }}
    //           alt="Sample"
    //         />

    //         <div className="bg-green-500 w-full h-10 absolute bottom-0 left-0 right-0 ">
    //           Test Extra Menu
    //         </div>
    //       </main>
    //       <footer className="bg-red-500">
    //         Footer
    //       </footer>
    //     </div>
    //     <aside>
    //       Sidebar
    //     </aside>

    //   </div>
    // </div>
  )
}

export default EditorLayout
