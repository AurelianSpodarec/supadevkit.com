'use client'

interface IContent {
  className?: string
}

function Content({ children, className }: IContent) {
  return (
    <main
      className={`${className} overflow-hidden bg-[#121212] flex items-center justify-center bg-repeat`}
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
      {/* <div className="absolute overflow-y-auto scrollbar-main top-0 right-0 bottom-0 left-0 h-full w-full"> */}
        <div className="flex items-center justify-center">
          {children}
        </div>
      {/* </div> */}
    </main >
  )
}

export default Content
