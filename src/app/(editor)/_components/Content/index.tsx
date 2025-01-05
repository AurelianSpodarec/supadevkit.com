'use client'

import EditorFooter from "../Footer"

interface IContent {
  className?: string
}

function Content({ children, className }: IContent) {
  return (
    <section className="relative flex flex-col w-full h-full overflow-hidden">

      <main
        className="bg-white/10 h-full flex-1 overflow-y-auto overflow-x-hidden"
      style={{
        backgroundImage: `
        linear-gradient(45deg, #1d1d1d 25%, transparent 0),
        linear-gradient(-45deg, #1d1d1d 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, #1d1d1d 0),
        linear-gradient(-45deg, transparent 75%, #1d1d1d 0)
      `,
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
        backgroundSize: '20px 20px',
      }}
      >

        {/* <div className="absolute w-full bg-green-500 z-10 bottom-16 w-[90%] mx-auto left-0 right-0 h-20">
              WOOOOP
            </div> */}
        <div id="content" className="h-full">
          {children}
        </div>
      </main>
      <EditorFooter />
    </section>
  )
}

export default Content
