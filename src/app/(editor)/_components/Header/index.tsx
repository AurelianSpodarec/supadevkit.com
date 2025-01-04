function Header() {
  return (
    <header className="bg-[#07080a] text-white py-2 px-4">
      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-xl">SupaToolkit</h1>
          <span>/</span>
          <span className="flex items-center space-x-2">
            <span>Image Filter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.25 5.75 8 10.25l-4.25-4.5"
              ></path>
            </svg>
          </span>
        </div>

        <div className="space-x-4">
          <button className="border border-[#ff792f]/30 text-gray-100 font-medium px-3.5 py-2 rounded-lg">
            About
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
