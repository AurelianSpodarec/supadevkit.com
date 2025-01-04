function Header() {
  return (
    <header className="bg-[#07080a] text-white py-2 px-4">
      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-xl">SupaToolkit</h1>
          {/* <span>
            <svg
              width="16"
              height="16"
              strokeLinejoin="round"
              className="text-white/15"
              data-testid="geist-icon"
              style={{ width: "22px", height: "22px" }}
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m4.015 15.394.296-.69 6-14 .295-.689 1.379.591-.296.69-6 14-.295.689z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span> */}
          {/* <span className="flex items-center space-x-2">
            <span className="text-sm">Image Filter</span>
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
          </span> */}
        </div>

        <div className="flex space-x-4">
          <button className="border border-[#ff792f]/30 text-gray-100 font-medium px-3.5 py-2 rounded-lg">
            About
          </button>
          <button className="flex items-center border border-[#ff792f]/30 text-gray-100 font-medium px-3.5 py-2 rounded-lg space-x-2">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
              <g>
                <g data-name="Discord Logos">
                  <path
                    fill="#5865f2"
                    d="M107.7 8.07A105.2 105.2 0 0 0 81.47 0a72 72 0 0 0-3.36 6.83 97.7 97.7 0 0 0-29.11 0A72 72 0 0 0 45.64 0a106 106 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.7 105.7 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.4 68.4 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.7 68.7 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.3 105.3 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15M42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69m42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69"
                    data-name="Discord Logo - Large - White"
                  ></path>
                </g>
              </g>
            </svg>
            <span>Join Community Discord</span>
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
