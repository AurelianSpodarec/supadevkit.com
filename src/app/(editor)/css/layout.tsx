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

          <div className="fill-white text-white flex items-center space-x-2">
            <div>
              {/* <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 -20 100 150" 
>
              <path d="m100 149.986-50-28.87v-25l50 28.87 50-28.87v25l-50 28.87Zm-75-50 28.868 50h-25L0 99.986l28.868-50h25L25 99.986Zm71.133-100h25l28.867 50-28.867 50h-25l28.867-50-28.867-50ZM50-.013l50 28.87v25l-50-28.87-50 28.87v-25L50-.014Z" />
            </svg> */}
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 151 151"
              >
                <path d="m75.91 150.2-.35-.15c-1.64-.74-11.79-5.24-22.55-10.01-16.059-7.11-37.163-16.62-51.559-23.24L0 116.13V20.6l1.545.48c2.271.7 6.115 1.9 8.541 2.67l3.032.95.211 22.4c.123 13.11.224 30.68.224 39.05v15.22c0 .8.477 1.53 1.213 1.84l61.384 26.27-.11 11.08c-.04 3.87-.09 7.35-.13 9.64m79.82-130.76c.08 4.99.27 19.56.27 47.61V116l-1.1.5c-1.25.56-8.13 3.72-15.29 7.01-7.14 3.28-22.03 10.07-33.07 15.09-11.05 5.02-21.88 9.94-24.07 10.94-.46.21-.93.42-1.38.62-.04-2.36-.08-5.96-.08-9.57v-11.34l.83-.41c2.57-1.26 53.52-24.76 54.5-25.13l.77-.29c.77-.3 1.29-1.04 1.29-1.87V24.77c1.16-.34 5.55-1.69 10.24-3.15 2.78-.87 5.34-1.66 7.09-2.18M27.843 29.62c3.549 1.02 38.727 11.59 46.027 13.84l2.29.7-.05 14.86c-.03 8.99-.07 25.73-.08 37.2-.01 9.3-.11 14.97-.17 17.72-4.22-1.77-13.38-5.57-23.79-9.86-11.417-4.7-21.192-8.78-24.418-10.18-.069-4.03-.093-17.36-.052-32.99.048-18.41.097-27.09.23-30.96zm96.517-.33c.09 3.97.25 13.87.25 31.83v33.24l-2.28 1.03c-3.25 1.46-21.34 9.47-37.16 16.43-1.53.68-3.07 1.34-4.29 1.85 0-5.68.02-18.87.05-34.12l.09-35.57 15.43-5.21c9.24-3.12 19.76-6.7 23.39-7.96 1.58-.55 3.25-1.1 4.52-1.52M78.05 14.82c.64.15 3.69.85 6.39 1.57 19.14 5.13 29.67 7.95 35.15 9.43-2.24.77-5.32 1.82-9.4 3.16l-24.04 7.93-7.68 2.53-10.37-3.06c-6.03-1.78-17.42-5.15-25.31-7.49-3.43-1.01-6.688-1.97-9.342-2.74 4.8-1.26 12.702-3.31 24.792-6.37 10.03-2.54 18.56-4.69 19.81-4.96M78.04 0c2.63.59 13.3 3.07 35.8 8.29 14.48 3.37 29.76 6.88 33.94 7.81l1.49.34c-1.82.58-4.08 1.28-6.76 2.1l-6.1 1.85-13.92-3.57c-7.95-2.03-21.08-5.4-29.17-7.48l-14.7-3.77a2 2 0 0 0-.97-.01L50.68 12c-14.855 3.55-28.905 6.93-31.227 7.51l-3.673.93-8.335-2.6c-.789-.25-1.537-.49-2.234-.72 7.341-1.75 22.26-5.23 48.599-11.37C65.78 2.96 75.85.58 77.8.07c.08-.02.17-.05.24-.07"></path>
              </svg>

            </div>
            <span className="font-bold text-2xl">
              SupaToolkit
            </span>
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
      </header >
      <div className="border relative border-red-500 flex flex-row flex-1 overflow-hidden">

        <div className="relative border border-green-500 flex flex-col w-full h-full overflow-hidden">

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
            }}>

            <div className="absolute w-full z-10 bottom-16 w-[90%] mx-auto left-0 right-0 h-20 bg-green-500">
              WOOOOP
            </div>
            <div id="content">
              <img
                src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
                style={{ filter: filterStyles, maxWidth: "100%", height: "auto" }}
                alt="Sample"
              />
            </div>
          </main>
          <footer className="bg-blue-500 flex items-center justify-between">
            <span>
              &copy; {new Date().getFullYear()} SupaToolkit 🛠️✨ All rights reserved.
            </span>
            <span>
              Made by Aurelian Spodarec 🏛️
            </span>
            {/* SupaToolkit All Rights Reserved &copy; {new Date().getFullYear()} made by Aurelian Spodarec */}
          </footer>
        </div>

        <aside className="w-[370px] overflow-auto h-full">

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
                <div className="border">
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
              </div>
            </section>

          </div>


          Configuration
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
    </div >
  )
}

export default EditorLayout
