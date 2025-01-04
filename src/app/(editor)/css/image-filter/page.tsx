'use client'

import { Slider } from "@/components/ui/slider"
import Content from "../../_components/Content"
import KitStyles from "../../_components/KitStyles"
import { cn } from "@/lib/utils"
import { useState } from "react";
import dedent from 'dedent';


import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/themes/prism.css'; //Example style, you can use another

// function App() {
//   const [code, setCode] = React.useState(
//     `function add(a, b) {\n  return a + b;\n}`
//   );
//   return (
//     <Editor
//       value={code}
//       onValueChange={code => setCode(code)}
//       highlight={code => highlight(code, languages.js)}
//       padding={10}
//       style={{
//         fontFamily: '"Fira code", "Fira Mono", monospace',
//         fontSize: 12,
//       }}
//     />
//   );
// }


function PageImageFilter() {
  const [code, setCode] = React.useState(dedent`
    import React from "react";
    import ReactDOM from "react-dom";

    function App() {
      return (
        <h1>Hello world</h1>
      );
    }

    ReactDOM.render(<App />, document.getElementById("root"));
    `);

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

  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

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

  return (
    <>
      <Content>
        <img
          src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
          style={{ filter: filterStyles, maxWidth: "100%", height: "auto" }}
          alt="Sample"
        />
      </Content>
      <KitStyles>
        <div>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
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
      </KitStyles>
    </>
  );
}

export default PageImageFilter;
