function KitStylesEmpty() {
  return (
    <div className="flex items-center justify-center h-full p-5">

      <div className="flex flex-col items-center bg-[#000000] border border-gray-700 px-6 py-10 rounded-2xl">
        <div className="h-8 w-8 fill-white mb-4">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40V188.2c8.5-7.6 19.7-12.2 32-12.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v32 64c0 70.7-57.3 128-128 128l-16 0H240l-.1 0h-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7V40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z" />
          </svg>
        </div>
        <div className="text-white text-center text-xs">
          Select an X Component on the canvas to activate this panel and edit
        </div>
      </div>

    </div>
  )
}

export default KitStylesEmpty
