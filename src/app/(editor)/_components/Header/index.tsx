'use client'

import { useState } from "react";
import Logo from "./_components/Logo";
import DesktopMenu from "./_components/Menu/DesktopMenu";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="h-[55px] flex w-full align-center"
      // style={{ background: "radial-gradient(circle at 35% 50%, rgba(43, 166, 255, .2) 0, transparent 45%), radial-gradient(circle at 65% 50%, rgba(246, 73, 66, .15) 0, transparent 45%)" }}
      // style={{ background: "radial-gradient(circle at 35% 50%, rgb(35 38 46 / 92%) 0, transparent 45%), radial-gradient(circle at 65% 50%, rgb(106 32 170 / 44%) 0, #000000 45%)" }}
      style={{ background: "radial-gradient(circle at 35% 50%, rgb(0 4 47 / 53%) 0, #fd000003 45%), radial-gradient(circle at 65% 50%, rgb(106 32 170 / 24%) 0, #000000 45%)" }}
    >
      <div className="flex w-full justify-between align-center items-center px-4">

        <div className="flex items-center">
          <Logo />
          <DesktopMenu />
        </div>

        <div className="flex items-center space-x-2">

          {/* Can do that later - not sure how modals will look like at first, what is a good solution, so it'll be a waste of time doing it now */}
          {/* <button className="inline-flex bg-[#222223]/40 text-[#FFF]/90 items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium border border-[#444] px-4 py-2.5">
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
          </button> */}

          {/* <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 disabled:pointer-events-none disabled:opacity-50 bg-[#222223] text-secondary-foreground border border-[#444] hover:bg-[#222223] px-4 py-2.5">
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
          </button> */}

          {/* <svg className="h-5 w-5 fill-white" viewBox="0 0 448 512">
            <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"></path>
          </svg> */}
        </div>

      </div>
    </header >
  )
}

export default Header
