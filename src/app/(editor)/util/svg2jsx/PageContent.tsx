'use client'

import { useEffect, useState } from "react";
import SVGCodeMirror from "./SVGCodeMirror"
import SvgToJsx from "./SvgToJsx";

// UI False?
const defaultOptions = [
  { id: "removeComments", name: "Remove comments", enabled: true },
  { id: "cleanUpAttributes", name: "Clean up attributes", enabled: false },
  { id: "minifySVG", name: "Minify SVG", enabled: false },
  { id: "optimizePaths", name: "Optimize paths", enabled: false },
];

function PageContent() {
  const [initialCode, setInitialCode] = useState(`<svg class="woop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 0c13.3 0 24 10.7 24 24l0 13.5c0 35.6 43.1 53.5 68.3 28.3l9.5-9.5c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-9.5 9.5C293 124.9 310.9 168 346.5 168l13.5 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-13.5 0c-35.6 0-53.5 43.1-28.3 68.3l9.5 9.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.5-9.5C259.1 293 216 310.9 216 346.5l0 13.5c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-13.5c0-35.6-43.1-53.5-68.3-28.3l-9.5 9.5c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l9.5-9.5C91 259.1 73.1 216 37.5 216L24 216c-13.3 0-24-10.7-24-24s10.7-24 24-24l13.5 0c35.6 0 53.5-43.1 28.3-68.3l-9.5-9.5c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l9.5 9.5C124.9 91 168 73.1 168 37.5L168 24c0-13.3 10.7-24 24-24zm48 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm320 80c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C574.5 312.1 591 352 624 352c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C551.9 446.5 512 463 512 496c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C417.5 423.9 401 384 368 384c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C440.1 289.5 480 273 480 240c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`); // Replace with your SVG code
  const [convertedCode, setConvertedCode] = useState("");
  const [options, setOptions] = useState(defaultOptions);
  const [optionMenuOpen, setOptionMenuOpen] = useState(false)

  // Functions
  // ------------------------------------------------

  function toggleOptionMenu() {
    setOptionMenuOpen(!optionMenuOpen)
  }

  function toggleOption(optionId) {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === optionId ? { ...option, enabled: !option.enabled } : option
      )
    );
  }

  function resetOptions() {
    setOptions([...defaultOptions]);
  }

  // Use Effects
  // ------------------------------------------------

  useEffect(() => {
    const optimizer = new SvgToJsx(initialCode);

    options.forEach(option => {
      if (option.enabled && optimizer[option.id]) {
        optimizer[option.id]();
      }
    });

    const processedSvg = optimizer.getProcessedSvg()
    setConvertedCode(processedSvg);
  }, [initialCode, options]);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col lg:flex-row items-center align-center w-full h-full">
        <section className="relative flex flex-col lg:w-1/2 h-full">
          <header className="flex py-4 justify-between items-center">

            <button onClick={() => resetOptions()}>Reset Default</button>

            <div className="ml-auto">
              <button onClick={() => toggleOptionMenu()} className={`p-1 rounded ${optionMenuOpen ? "bg-orange-500" : ""}`}>
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    clipPath="url(#options_svg__a)"
                  >
                    <path d="M3.29 9.91a1.05 1.05 0 0 1-.21 1.157l-.037.038a1.272 1.272 0 1 0 1.8 1.801l.039-.038a1.05 1.05 0 0 1 1.158-.21 1.05 1.05 0 0 1 .636.961v.108a1.273 1.273 0 0 0 2.546 0v-.057a1.05 1.05 0 0 1 .687-.96 1.05 1.05 0 0 1 1.158.21l.038.037a1.272 1.272 0 0 0 2.175-.9 1.272 1.272 0 0 0-.374-.9l-.038-.039a1.05 1.05 0 0 1-.21-1.158 1.05 1.05 0 0 1 .961-.636h.108a1.273 1.273 0 0 0 0-2.546h-.057a1.05 1.05 0 0 1-.96-.687 1.05 1.05 0 0 1 .21-1.158l.037-.038a1.272 1.272 0 1 0-1.8-1.801l-.039.038a1.05 1.05 0 0 1-1.158.21h-.05a1.05 1.05 0 0 1-.637-.961v-.108a1.273 1.273 0 0 0-2.546 0v.057a1.05 1.05 0 0 1-.636.96 1.05 1.05 0 0 1-1.158-.21l-.038-.037a1.273 1.273 0 1 0-1.801 1.8l.038.039a1.05 1.05 0 0 1 .21 1.158v.05a1.05 1.05 0 0 1-.961.637h-.108a1.273 1.273 0 0 0 0 2.546h.057a1.05 1.05 0 0 1 .96.636Z" />
                    <path d="M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </g>
                  <defs>
                    <clipPath id="options_svg__a">
                      <path fill="currentColor" d="M0 0h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </button>



              <div className={`${optionMenuOpen ? "block" : "hidden"} top-8 absolute p-4 z-10 left-0 right-0`}>
                <div className="rounded border border-gray-700 shadow p-6 bg-[#2e3138] ">

                  <div>
                    <span>Optimize</span>
                    <div className="flex  flex-wrap items-center">
                      {options.map(option => (
                        <div key={option.id} className="w-1/2 inline-flex flex-row">
                          <label key={option.id}>
                            <input
                              type="checkbox"
                              checked={option.enabled}
                              onChange={() => toggleOption(option.id)}
                            />
                            {option.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* <button onClick={resetOptions}>Reset Options</button> */}
          </header>
          <SVGCodeMirror
            value={initialCode}
            onChange={setInitialCode}
          />
        </section>
        <section className="flex flex-col lg:w-1/2 h-full">
          <h2 className="text-2xl font-bold">Converted JSX Code</h2>
          <SVGCodeMirror
            value={convertedCode}
            readOnly
          />
        </section>
      </div>
    </main>
  );
}

export default PageContent;
