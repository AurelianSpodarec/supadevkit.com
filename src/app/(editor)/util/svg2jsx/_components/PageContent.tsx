'use client'

import { useEffect, useState } from "react";

import SVGCodeMirror from "./SVGCodeMirror"
import { optimizeSvg } from './optimize';
import SvgOptions from "./SvgOptions";

const defaultOptions = {
  removeComments: true,
  removeTitle: true,
  preserveLegalComments: false,
  cleanUpAttributes: false,
  minifySVG: false,
  optimizePaths: false,
};

interface IPlaygroundProps {
  children: React.ReactNode
}

function PlaygroundHeader({ name, children }: IPlaygroundProps) {
  return (
    <header className="border-b border-b-[#3f3f46] bg-[#18181b] px-2">
      {/* {name} */}
      {children}
    </header>
  )
}

const CONVERT_OPTIONS = [
  {
    id: "jsx",
    name: "JSX",
  },
  {
    id: "react",
    name: "React"
  },
  {
    id: "reactNative",
    name: "React Native"
  },
  {
    id: "dataURI",
    name: "Data URI"
  }
]

function PageContent() {
  const [initialCode, setInitialCode] = useState(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"/></svg>`); // Replace with your SVG code
  const [convertedCode, setConvertedCode] = useState("");
  const [options, setOptions] = useState(defaultOptions);
  const [optionMenuOpen, setOptionMenuOpen] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);

  const [convertTo, setConvertTo] = useState("react")
  const [isPreview, setIsPreview] = useState(false)

  //TODO: Output: HTML, JSX, React, React Native, Data URI, PNG

  // Handlers
  function handlerSetConvertTo(id) {
    setConvertTo(id)
    setIsPreview(false)
  }

  // Functions
  // ------------------------------------------------

  function toggleOptionMenu() {
    setOptionMenuOpen(!optionMenuOpen);
  }

  function toggleOption(optionKey) {
    setOptions(prevOptions => ({
      ...prevOptions,
      [optionKey]: !prevOptions[optionKey],
    }));
  }

  function resetOptions() {
    setOptions([...defaultOptions]);
  }

  const handleOptimize = () => {
    try {
      const optimized = optimizeSvg(initialCode, options);
      setConvertedCode(optimized);
    } catch (err) {
      console.log("Failed to optimize SVG. Please check your input.", err);
    }
  };

  // Use Effects
  // ------------------------------------------------

  useEffect(() => {
    handleOptimize()
  }, [initialCode, options]);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col lg:flex-row items-center align-center w-full h-full">
        <section className="relative flex flex-col lg:w-1/2 h-full border border-[#3f3f46]">
          <PlaygroundHeader>
            <div className="flex items-center justify-between">
              <span className=" text-xs font-semibold py-2 uppercase">
                SVG Input
              </span>
              <button>
                <svg className="h-4 w-4" xmlns='http://www.w3.org/2000/svg' fill='none'>
                  <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    clipPath='url(#a)'
                  >
                    <path d='M3.29 9.91a1.05 1.05 0 0 1-.21 1.157l-.037.038a1.272 1.272 0 1 0 1.8 1.801l.039-.038a1.05 1.05 0 0 1 1.158-.21 1.05 1.05 0 0 1 .636.961v.108a1.273 1.273 0 0 0 2.546 0v-.057a1.05 1.05 0 0 1 .687-.96 1.05 1.05 0 0 1 1.158.21l.038.037a1.272 1.272 0 0 0 2.175-.9 1.27 1.27 0 0 0-.374-.9l-.038-.039a1.05 1.05 0 0 1-.21-1.158 1.05 1.05 0 0 1 .961-.636h.108a1.273 1.273 0 0 0 0-2.546h-.057a1.05 1.05 0 0 1-.96-.687 1.05 1.05 0 0 1 .21-1.158l.037-.038a1.272 1.272 0 1 0-1.8-1.801l-.039.038a1.05 1.05 0 0 1-1.158.21h-.05a1.05 1.05 0 0 1-.637-.961v-.108a1.273 1.273 0 0 0-2.546 0v.057a1.05 1.05 0 0 1-.636.96 1.05 1.05 0 0 1-1.158-.21l-.038-.037a1.273 1.273 0 1 0-1.801 1.8l.038.039a1.05 1.05 0 0 1 .21 1.158v.05a1.05 1.05 0 0 1-.961.637h-.108a1.273 1.273 0 0 0 0 2.546h.057a1.05 1.05 0 0 1 .96.636Z'></path>
                    <path d='M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4'></path>
                  </g>
                  <defs>
                    <clipPath id='a'>
                      <path fill='currentColor' d='M0 0h16v16H0z'></path>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </PlaygroundHeader>
          {/* <header className="flex h-14 justify-between items-center">
            <button onClick={() => resetOptions()}>Reset Default</button>
            <div className="ml-auto">
              <button onClick={() => toggleOptionMenu()} className={`p-1 rounded ${optionMenuOpen ? "bg-orange-500" : ""}`}>
                Options
              </button>

              <div className={`${optionMenuOpen ? "block" : "block"} top-8 absolute p-4 z-10 left-0 right-0`}>
                <div className="relative">

                  <div className="rounded border border-gray-700 shadow p-6 bg-[#2e3138]">
                    <div>
                      <span>Optimize</span>
                      <div className="flex flex-col h-[570px] flex-wrap items-center">
                        {SvgOptions.map(group => (
                          <>
                            {group.options.map((option) => (
                              <div className="mb-2 w-1/2 inline-flex flex-wrap flex-row text-xs">
                                <label key={option.id}>
                                  <input
                                    type="checkbox"
                                    checked={option[option.id]}
                                    onChange={() => toggleOption(option.id)}
                                  />
                                  {option.name}
                                </label>
                              </div>
                            ))}
                            <div className="min-h-4"></div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header> */}
          <SVGCodeMirror
            value={initialCode}
            onChange={setInitialCode}
          />
        </section>

        <section className={`flex flex-col lg:w-1/2 h-full border border-l-0 border-[#3f3f46] ${dataLoading ? 'opacity-50' : ''}`}>
          <PlaygroundHeader>
            <div className="flex items-center justify-between">

              <div className="flex items-center text-sm space-x-2">
                <span className=" text-xs font-semibold py-2 uppercase">
                  Output
                </span>
                <div className="space-x-2">
                  {CONVERT_OPTIONS.map((item) => {
                    const isActive = item.id === convertTo
                    return (
                      <button
                        key={item.id}
                        onClick={() => handlerSetConvertTo(item.id)}
                        className={`cursor-default px-1 py-0.5 text-xs rounded ${isActive ? "bg-purple-700/80" : "hover:bg-purple-700/40"}`}
                      >
                        {item.name}
                      </button>
                    )
                  })}
                </div>
                <span>|</span>
                <button onClick={() => setIsPreview(!isPreview)} className="flex items-center space-x-1">
                  <svg className="h-4 w-4 fill-white" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6M288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80h-2c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64-5.5 0-10.9-.7-16-2v2c0 44.2 35.8 80 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                  </svg>
                  <span className="sr-only">Preview</span>
                </button>
              </div>

              <div className="flex items-center text-sm space-x-4">
                <button className="flex items-center space-x-1 border border-gray-700/80 bg-gray-700/30 rounded px-2 py-0.5">
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
                    <path
                      stroke='#6E7687'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='M6 1h8v10H6z'
                    ></path>
                    <path
                      fill='#6E7687'
                      stroke='#6E7687'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      d='M2 15h8v-4H6V5H2z'
                      opacity='0.4'
                    ></path>
                  </svg>
                  Copy
                </button>
                <button>
                  <svg className="h-4 w-4" xmlns='http://www.w3.org/2000/svg' fill='none'>
                    <g
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      clipPath='url(#a)'
                    >
                      <path d='M3.29 9.91a1.05 1.05 0 0 1-.21 1.157l-.037.038a1.272 1.272 0 1 0 1.8 1.801l.039-.038a1.05 1.05 0 0 1 1.158-.21 1.05 1.05 0 0 1 .636.961v.108a1.273 1.273 0 0 0 2.546 0v-.057a1.05 1.05 0 0 1 .687-.96 1.05 1.05 0 0 1 1.158.21l.038.037a1.272 1.272 0 0 0 2.175-.9 1.27 1.27 0 0 0-.374-.9l-.038-.039a1.05 1.05 0 0 1-.21-1.158 1.05 1.05 0 0 1 .961-.636h.108a1.273 1.273 0 0 0 0-2.546h-.057a1.05 1.05 0 0 1-.96-.687 1.05 1.05 0 0 1 .21-1.158l.037-.038a1.272 1.272 0 1 0-1.8-1.801l-.039.038a1.05 1.05 0 0 1-1.158.21h-.05a1.05 1.05 0 0 1-.637-.961v-.108a1.273 1.273 0 0 0-2.546 0v.057a1.05 1.05 0 0 1-.636.96 1.05 1.05 0 0 1-1.158-.21l-.038-.037a1.273 1.273 0 1 0-1.801 1.8l.038.039a1.05 1.05 0 0 1 .21 1.158v.05a1.05 1.05 0 0 1-.961.637h-.108a1.273 1.273 0 0 0 0 2.546h.057a1.05 1.05 0 0 1 .96.636Z'></path>
                      <path d='M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4'></path>
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='currentColor' d='M0 0h16v16H0z'></path>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

            </div>
          </PlaygroundHeader>
          <div className="h-full w-full flex items-center justify-center fill-white/80">
            {isPreview ? (
              <div className="h-full w-full flex items-center align-center justify-center max-w-[200px]" dangerouslySetInnerHTML={{ __html: convertedCode }} />
            ) : (
              <SVGCodeMirror value={convertedCode} readOnly={true} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PageContent;
