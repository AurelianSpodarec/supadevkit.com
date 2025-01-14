'use client'

import { useEffect, useState } from "react";
import SVGCodeMirror from "./SVGCodeMirror"
import { optimizeSvg } from './optimize';

const defaultOptions = {
  removeComments: true,
  preserveLegalComments: false,
  cleanUpAttributes: false,
  minifySVG: false,
  optimizePaths: false,
};

const optionGroups = [
  {
    name: "Clean Up Options",
    options: [
      { id: "cleanUpAttributes", name: "Clean Up Attributes", value: true },
      { id: "cleanUpEnableBackground", name: "Clean Up Enable Background", value: true },
      { id: "cleanUpIDs", name: "Clean Up IDs", value: true },
      { id: "roundNumericValuesInLists", name: "Round Numeric Values in Lists", value: true },
      { id: "roundNumericValues", name: "Round Numeric Values", value: true },
      { id: "collapseGroups", name: "Collapse Groups", value: true },
    ],
  },
  {
    name: "Element Management",
    options: [
      { id: "moveElementAttributesToGroups", name: "Move Element Attributes to Groups", value: true },
      { id: "moveGroupAttributesToElements", name: "Move Group Attributes to Elements", value: true },
      { id: "mergePaths", name: "Merge Paths", value: true },
      { id: "reusePaths", name: "Reuse Paths", value: true },
      { id: "sortAttributes", name: "Sort Attributes", value: true },
      { id: "sortChildrenOfDefs", name: "Sort Children of <defs>", value: true },
    ],
  },
  {
    name: "ID Management",
    options: [
      { id: "prefixIDsWithClassname", name: "Prefix IDs with Classname", value: true },
    ],
  },
  {
    name: "Color and Shape Conversion",
    options: [
      { id: "convertColorsToRGB", name: "Convert Colors to RGB", value: true },
      { id: "convertPathData", name: "Convert Path Data", value: true },
      { id: "convertShapesToPaths", name: "Convert Shapes to Paths", value: true },
      { id: "convertStylesToAttributes", name: "Convert Styles to Attributes", value: true },
      { id: "convertTransforms", name: "Convert Transforms", value: true },
    ],
  },
  {
    name: "Style Optimization",
    options: [
      { id: "inlineStyles", name: "Inline Styles", value: true },
      { id: "mergeStyles", name: "Merge Styles", value: true },
      { id: "minifyStyles", name: "Minify Styles", value: true },
    ],
  },
  {
    name: "Cleanup Options",
    options: [
      { id: "preserveLegalComments", name: "Keep Legal Comments", value: true },
      { id: "removeComments", name: "Remove Comments", value: true },
      { id: "removeDesc", name: "Remove <desc>", value: true },
      { id: "removeDimensions", name: "Remove Dimensions", value: true },
      { id: "removeDoctype", name: "Remove Doctype", value: true },
      { id: "removeNamespace", name: "Remove Namespace", value: true },
      { id: "removeEmptyAttributes", name: "Remove Empty Attributes", value: true },
      { id: "removeEmptyText", name: "Remove Empty Text", value: true },
      { id: "removeHiddenElements", name: "Remove Hidden Elements", value: true },
      { id: "removeNonInheritableGroups", name: "Remove Non-Inheritable Groups", value: true },
      { id: "removeElementsOutsideViewbox", name: "Remove Elements Outside Viewbox", value: true },
      { id: "removeRasterImages", name: "Remove Raster Images", value: true },
      { id: "removeScript", name: "Remove <script>", value: true },
      { id: "removeStyle", name: "Remove <style>", value: true },
      { id: "removeTitle", name: "Remove <title>", value: true },
      { id: "removeUnknownContent", name: "Remove Unknown Content", value: true },
      { id: "removeUnusedNamespaces", name: "Remove Unused Namespaces", value: true },
      { id: "removeDefsWithoutID", name: "Remove <defs> w/out <id>", value: true },
      { id: "removeUnusedStrokeAndFill", name: "Remove Unused Stroke and Fill", value: true },
      { id: "removeViewBox", name: "Remove viewBox", value: true },
      { id: "removeXMLProcessingInstructions", name: "Remove XML Processing Instructions", value: true },
    ],
  },
];


function PageContent() {
  const [initialCode, setInitialCode] = useState(`<?xml version="1.0" encoding="UTF-8"?><svg class="woop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 0c13.3 0 24 10.7 24 24l0 13.5c0 35.6 43.1 53.5 68.3 28.3l9.5-9.5c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-9.5 9.5C293 124.9 310.9 168 346.5 168l13.5 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-13.5 0c-35.6 0-53.5 43.1-28.3 68.3l9.5 9.5c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-9.5-9.5C259.1 293 216 310.9 216 346.5l0 13.5c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-13.5c0-35.6-43.1-53.5-68.3-28.3l-9.5 9.5c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l9.5-9.5C91 259.1 73.1 216 37.5 216L24 216c-13.3 0-24-10.7-24-24s10.7-24 24-24l13.5 0c35.6 0 53.5-43.1 28.3-68.3l-9.5-9.5c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l9.5 9.5C124.9 91 168 73.1 168 37.5L168 24c0-13.3 10.7-24 24-24zm48 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm320 80c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C574.5 312.1 591 352 624 352c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C551.9 446.5 512 463 512 496c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C417.5 423.9 401 384 368 384c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C440.1 289.5 480 273 480 240c0-8.8 7.2-16 16-16s16 7.2 16 16zm0 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`); // Replace with your SVG code
  const [convertedCode, setConvertedCode] = useState("");
  const [options, setOptions] = useState(defaultOptions);
  const [optionMenuOpen, setOptionMenuOpen] = useState(true);
  const [dataLoading, setDataLoading] = useState(false); // New state

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
        <section className="relative flex flex-col lg:w-1/2 h-full border border-[#d4d4d8]">
          <header className="flex h-14 justify-between items-center">
            <button onClick={() => resetOptions()}>Reset Default</button>
            <div className="ml-auto">
              <button onClick={() => toggleOptionMenu()} className={`p-1 rounded ${optionMenuOpen ? "bg-orange-500" : ""}`}>
                {/* ...SVG icon... */}
              </button>

              <div className={`${optionMenuOpen ? "block" : "block"} top-8 absolute p-4 z-10 left-0 right-0`}>
                <div className="relative">

                  <div className="rounded border border-gray-700 shadow p-6 bg-[#2e3138]">
                    <div>
                      <span>Optimize</span>
                      <div className="flex flex-col h-[570px] flex-wrap items-center">
                        {optionGroups.map(group => (
                          <>
                            {group.options.map(option => (
                              <div className="mb-2 w-1/2 inline-flex flex-wrap flex-row text-xs">
                                <label key={option.id}>
                                  <input
                                    type="checkbox"
                                    checked={options[option.id]}
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
          </header>
          <SVGCodeMirror
            value={initialCode}
            onChange={setInitialCode}
          />
        </section>

        <section className={`flex flex-col lg:w-1/2 h-full border border-l-0 border-[#d4d4d8] ${dataLoading ? 'opacity-50' : ''}`}>
          <header className="flex h-14 justify-between items-center">
            <span>Converted Code</span>
          </header>
          <div className="h-full p-4 overflow-y-scroll">
            <SVGCodeMirror value={convertedCode} readOnly={true} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default PageContent;


// 'use client';

// import React, { useState } from 'react';
// import { transform } from '@svgr/core';

// const svgoOptions = [
//   { name: 'Remove Doctype', plugin: 'removeDoctype', active: true },
//   { name: 'Remove Comments', plugin: 'removeComments', active: true },
//   { name: 'Remove Metadata', plugin: 'removeMetadata', active: true },
//   { name: 'Remove XML Proc. Inst.', plugin: 'removeXMLProcInst', active: true },
//   { name: 'Remove ViewBox', plugin: 'removeViewBox', active: false },
//   { name: 'Remove Dimensions', plugin: 'removeDimensions', active: false },
// ];

// const SvgOptimizer = () => {
//   const [svgInput, setSvgInput] = useState('');
//   const [svgOutput, setSvgOutput] = useState('');
//   const [jsxOutput, setJsxOutput] = useState('');
//   const [options, setOptions] = useState(svgoOptions);
//   const [loading, setLoading] = useState(false);

//   const handleCheckboxChange = (index) => {
//     const updatedOptions = [...options];
//     updatedOptions[index].active = !updatedOptions[index].active;
//     setOptions(updatedOptions);
//   };

//   const optimizeSvg = async () => {
//     setLoading(true);

//     try {
//       const plugins = options
//         .filter((option) => option.active)
//         .map((option) => ({ name: option.plugin }));

//       const response = await fetch('/api/optimizeSvg', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ svg: svgInput, plugins }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSvgOutput(data.optimizedSvg);
//         setJsxOutput(''); // Reset JSX output
//       } else {
//         alert(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       alert('Error optimizing SVG: ' + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const convertToJsx = async (type) => {
//     try {
//       const options =
//         type === 'react-native'
//           ? { native: true }
//           : type === 'data-uri'
//           ? { expandProps: false, svgProps: { 'data-uri': true } }
//           : {}; // React default

//       const component = await transform(svgOutput, options, { componentName: 'MyIcon' });
//       setJsxOutput(component);
//     } catch (error) {
//       alert('Error converting SVG: ' + error.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">SVG Optimizer & Converter</h1>

//       {/* SVG Input */}
//       <textarea
//         className="w-full h-40 border p-2 mb-4"
//         placeholder="Paste your SVG here..."
//         value={svgInput}
//         onChange={(e) => setSvgInput(e.target.value)}
//       ></textarea>

//       {/* Optimization Options */}
//       <div className="mb-4">
//         <h2 className="font-semibold mb-2">Optimization Options</h2>
//         {options.map((option, index) => (
//           <label key={index} className="block">
//             <input
//               type="checkbox"
//               checked={option.active}
//               onChange={() => handleCheckboxChange(index)}
//               className="mr-2"
//             />
//             {option.name}
//           </label>
//         ))}
//       </div>

//       {/* Optimize Button */}
//       <button
//         onClick={optimizeSvg}
//         disabled={loading}
//         className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
//           loading ? 'opacity-50 cursor-not-allowed' : ''
//         }`}
//       >
//         {loading ? 'Optimizing...' : 'Optimize SVG'}
//       </button>

//       {/* Optimized SVG Output */}
//       {svgOutput && (
//         <div className="mt-6">
//           <h2 className="font-semibold mb-2">Optimized SVG:</h2>
//           <textarea
//             className="w-full h-40 border p-2 mb-4"
//             value={svgOutput}
//             readOnly
//           ></textarea>

//           {/* JSX Conversion Options */}
//           <h2 className="font-semibold mb-2">Convert to:</h2>
//           <div className="flex gap-4">
//             <button
//               onClick={() => convertToJsx('react')}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               React
//             </button>
//             <button
//               onClick={() => convertToJsx('react-native')}
//               className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
//             >
//               React Native
//             </button>
//             <button
//               onClick={() => convertToJsx('data-uri')}
//               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//             >
//               Data URI
//             </button>
//           </div>

//           {/* JSX Output */}
//           {jsxOutput && (
//             <div className="mt-4">
//               <h2 className="font-semibold mb-2">Converted JSX:</h2>
//               <textarea
//                 className="w-full h-40 border p-2"
//                 value={jsxOutput}
//                 readOnly
//               ></textarea>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SvgOptimizer;




















// pages/index.js
// import React, { useState } from 'react';
// import { optimizeSvg } from './optimize';

// export default function SvgOptimizer() {
//   const [svgInput, setSvgInput] = useState(`<svg xmlns="http://www.w3.org/200dsdsdsdsdfddddd0/svg" class="woop" width="400" height="400" viewBox="0 0 124 124" fill="none">
// <rect width="124" height="124" rx="24" fill="#F97316"/>
// <!--! WPo##########d#################################op !-->
// <path d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z" fill="white"/>
//  <!-- sds -->d
// <circle cx="63.2109" cy="37.5391" r="1ds8.1641" fill="black"/>
// <rect opacity="0.4" x="81.1328" y="80.7198" width="mkkkk17.5687" height="ddddddd17.3876" rx="4" transform="rotate(-45 81.1328 80.7198)" fill="#FDBA74"/>
// </svg>`);
//   const [svgOutput, setSvgOutput] = useState('');
//   const [error, setError] = useState('');

//   const handleOptimize = () => {
//     try {
//       const optimized = optimizeSvg(svgInput);
//       setSvgOutput(optimized);
//       setError('');
//     } catch (err) {
//       setError('Failed to optimize SVG. Please check your input.');
//       console.log("Failed to optimize SVG. Please check your input.'", err)
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Client-Side SVG Optimizer</h1>
//       <textarea
//         value={svgInput}
//         onChange={(e) => setSvgInput(e.target.value)}
//         placeholder="Paste your SVG code here"
//         rows={10}
//         style={{ width: '100%', padding: '10px' }}
//       ></textarea>
//       <button onClick={handleOptimize} style={{ margin: '10px 0', padding: '10px 20px' }}>
//         Optimize
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {svgOutput && (
//         <div>
//           <h2>Optimized SVG</h2>
//           <textarea
//             value={svgOutput}
//             readOnly
//             rows={10}
//             style={{ width: '100%', padding: '10px' }}
//           ></textarea>
//         </div>
//       )}
//     </div>
//   );
// }
