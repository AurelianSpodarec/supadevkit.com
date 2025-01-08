'use client'

import MegaMenu from "./MegaMenu";

function Header() {
  return (
    <header
      className="h-[55px] flex w-full align-center"
      style={{ background: "radial-gradient(circle at 35% 50%, rgba(43, 166, 255, .2) 0, transparent 45%), radial-gradient(circle at 65% 50%, rgba(246, 73, 66, .15) 0, transparent 45%)" }}
    >
      <div className="flex w-full justify-between align-center items-center px-4">

        <div className="fill-white text-white flex items-center space-x-2">
          <div>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 00 151 151"
            >
              <path d="m100 149.986-50-28.87v-25l50 28.87 50-28.87v25l-50 28.87Zm-75-50 28.868 50h-25L0 99.986l28.868-50h25L25 99.986Zm71.133-100h25l28.867 50-28.867 50h-25l28.867-50-28.867-50ZM50-.013l50 28.87v25l-50-28.87-50 28.87v-25L50-.014Z" />
            </svg>
          </div>

          <div className="flex items-center">
            <span className="font-bold text-xl font-geistMono">
              SupaToolkit
            </span>
            <span className="ml-3 mr-1">
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
            </span>



            <MegaMenu />
          </div>
        </div>

        <div className="flex items-center space-x-2">

          <button className="inline-flex bg-[#222223]/40 text-[#FFF]/90 items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium border border-[#444] px-4 py-2.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 8v3"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
              ></path>
              <rect
                width="12.5"
                height="12.5"
                x="1.75"
                y="1.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                rx="4"
              ></rect>
            </svg>
            <span className="text-sm">About Image Filter</span>
          </button>

          <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 disabled:pointer-events-none disabled:opacity-50 bg-[#222223] text-secondary-foreground border border-[#444] hover:bg-[#222223] px-4 py-2.5">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
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
            <span className="text-sm">Join Community</span>
          </button>
        </div>

      </div>
    </header >
  )
}

export default Header
