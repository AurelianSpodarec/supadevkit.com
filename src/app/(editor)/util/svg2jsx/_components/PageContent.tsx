'use client'

import { useEffect, useState } from "react";

import SVGCodeMirror from "./SVGCodeMirror"
import { optimizeSvg } from './optimize';
import SvgOptions from "./SvgOptions";

const defaultOptions = {
  removeComments: true,
  preserveLegalComments: false,
  cleanUpAttributes: false,
  minifySVG: false,
  optimizePaths: false,
};

interface IPlaygroundProps {
  name: string
}

function PlaygroundHeader({ name }: IPlaygroundProps) {
  return (
    <header className="border-b border-b-[#3f3f46] bg-[#18181b] px-2 text-xs font-semibold py-2 uppercase">
      {name}
    </header>
  )
}

function PageContent() {
  const [initialCode, setInitialCode] = useState(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="48px" height="1px" viewBox="0 0 48 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
    <title>Rectangle 5</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="19-Separator" transform="translate(-129.000000, -156.000000)" fill="#063855">
            <g id="Controls/Settings" transform="translate(80.000000, 0.000000)">
                <g id="Content" transform="translate(0.000000, 64.000000)">
                    <g id="Group" transform="translate(24.000000, 56.000000)">
                        <g id="Group-2">
                            <rect id="Rectangle-5" x="25" y="36" width="48" height="1"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`); // Replace with your SVG code
  const [convertedCode, setConvertedCode] = useState("");
  const [options, setOptions] = useState(defaultOptions);
  const [optionMenuOpen, setOptionMenuOpen] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);

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
        <PlaygroundHeader name="SVG Input" />
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
          {/* <header className="flex h-14 justify-between items-center">
            <span>Converted Code</span>
          </header> */}
          <PlaygroundHeader name="JSX Output" />
          <div className="h-full overflow-y-scroll">
            <SVGCodeMirror value={convertedCode} readOnly={true} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default PageContent;
