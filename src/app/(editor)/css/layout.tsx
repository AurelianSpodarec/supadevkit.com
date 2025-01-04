'use client'

import AppProvider from "@/providers"
import Content from "../_components/Content"
import KitStyles from "../_components/KitStyles"
import Header from "../_components/Header"
import { useState, useEffect } from "react";
import dedent from "dedent";
import Editor from "react-simple-code-editor"
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-dark.css'

function EditorLayout({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    saturate: 100,
    sepia: 0,
  });
  const filterStyles = `
    blur(${filters.blur}px)
    brightness(${filters.brightness}%) 
    contrast(${filters.contrast}%) 
    grayscale(${filters.grayscale}%) 
    hue-rotate(${filters.hueRotate}deg) 
    invert(${filters.invert}%) 
    saturate(${filters.saturate}%) 
    sepia(${filters.sepia}%)
  `;
  const [code, setCode] = useState(dedent`filter: ${filterStyles};`);


  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };


  return (
    <div className="flex flex-col w-full h-screen">
      <header className="h-[55px] flex w-full align-center">
        <div className="flex w-full justify-between align-center items-center">

          <div>
            SupaToolkit
          </div>

          <div className="flex items-center">
            <button className="flex items-center  space-x-2 border border-[#ff792f]/30 text-gray-100 font-medium px-3.5 py-2 rounded-lg">
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
            <button className="flex items-center border border-[#ff792f]/30 text-gray-100 font-medium px-3.5 py-2 rounded-lg space-x-2">
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
      </header>
      <div className="border border-red-500 flex flex-row flex-1 overflow-hidden">

        <div className="border border-green-500 flex flex-col w-full h-full overflow-hidden">
          <main className="bg-purple-500 flex-1 overflow-auto">
            Content
            <img
              src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
              style={{ filter: filterStyles, maxWidth: "100%", height: "auto" }}
              alt="Sample"
            />
          </main>
          <footer className="bg-blue-500">
            Footer
          </footer>
        </div>

        <aside className="w-[370px] overflow-auto h-full">
          Sidebar
          <div>

            <section>
              <header className="flex items-center justify-between">

                <div>
                  CSS | TailwindCSS | Styles

                  {/* <button>
                    <svg
                      className="w-6"
                      width="40"
                      height="24"
                      fill="none"
                      viewBox="0 0 40 24"
                    >
                      <path
                        fill="#38BDF8"
                        d="M20 0q-8 0-10 8 3-4 7-3c1.522.38 2.61 1.485 3.814 2.706C22.774 9.696 25.044 12 30 12q8 0 10-8-3 4-7 3c-1.522-.38-2.61-1.485-3.813-2.706C27.227 2.304 24.958 0 20 0M10 12q-8 0-10 8 3-4 7-3c1.522.38 2.61 1.485 3.813 2.706 1.96 1.99 4.23 4.294 9.188 4.294q8 0 10-8-3 4-7 3c-1.522-.38-2.61-1.485-3.813-2.706-1.96-1.99-4.23-4.294-9.187-4.294"
                      ></path>
                    </svg>
                    <span className="sr-only">TailwindCSS</span>
                  </button> */}
                </div>
                <div>
                  Copy Code
                  <div>

                  </div>
                  {/* <div>
                  Options: Align: Top, Bottom, Left, 
                </div> */}
                </div>
              </header>
              <div className="relative">
                <button className="absolute inset-0 z-10">
                  <span className="sr-only">Copy code</span>
                </button>
                <Editor
                  value={code}
                  onValueChange={code => setCode(code)}
                  highlight={code => highlight(code, languages.css, 'css')}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                  }}
                />
              </div>
            </section>

          </div>
          {Object.keys(filters).map((filterName) => (
            <div key={filterName} style={{ margin: "10px 0" }}>
              <label>
                {filterName.charAt(0).toUpperCase() + filterName.slice(1)}:{" "}
                {filters[filterName]}
              </label>
              <input
                type="range"
                min={filterName === "hueRotate" ? 0 : 0}
                max={filterName === "hueRotate" ? 360 : 200}
                step={1}
                value={filters[filterName]}
                onChange={(e) =>
                  updateFilter(filterName, parseInt(e.target.value, 10))
                }
                style={{ width: "60%" }}
              />
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}

export default EditorLayout
