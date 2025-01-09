'use client';

import React, { useEffect, useState } from "react";
import SVGCodeMirror from "./SVGCodeMirror";

function PageJsSVG2JSX() {
  const [initialCode, setInitialCode] = useState(
    `<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height="24" width="24"></rect><path d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"></path></g></svg>`
  );
  const [convertedCode, setConvertedCode] = useState("");
  const [useArrowFunction, setUseArrowFunction] = useState(true);
  const [useExport, setUseExport] = useState(false);

  function convertSVGtoJSX() {
    let svgCode = initialCode;

    // Remove HTML comments from SVG
    svgCode = svgCode.replace(/<!--.*?-->/gs, '');

    // Remove xmlns attribute
    svgCode = svgCode.replace(/\s*xmlns="[^"]*"/g, '');

    // Convert class to className
    svgCode = svgCode.replace(/\s*class="([^"]*)"/g, ' className="$1"');

    // Convert attributes to camelCase
    svgCode = svgCode.replace(/([a-zA-Z]+)-([a-z])/g, (match, p1, p2) => `${p1}${p2.toUpperCase()}`);

    svgCode = formatCode(svgCode);
    setConvertedCode(svgCode);
  }

  function formatCode(code) {
    const lines = code.split('>');
    return lines
      .map((line, index) => {
        line = line.trim();
        if (line) {
          // Check if the line is a self-closing tag or empty
          if (line.endsWith('/')) {
            return line + '>'; // Return self-closing tag on one line
          }
          // Indent all lines except the first and the last
          if (index > 0 && index < lines.length - 1) {
            line = `  ${line}`;
          }
          return line + '>';
        }
        return line;
      })
      .filter(line => line)
      .join('\n');
  }

  useEffect(() => {
    convertSVGtoJSX();
  }, [initialCode]);

  useEffect(() => {
    if (convertedCode) {
      const formattedCode = formatCode(convertedCode);
      setConvertedCode(formattedCode);
    }
  }, [convertedCode]);

  return (
    <main className="h-full w-full">

      <section className="flex items-center align-center w-full h-full">
        <div className="flex w-1/2 h-full">
          <SVGCodeMirror
            value={initialCode}
          />
        </div>
        <div className="mx-4">Magic</div>
        <div className="w-1/2 h-full">
          <SVGCodeMirror
            value={convertedCode}
            readOnly
          />
        </div>
      </section>

    </main>
  );
}

export default PageJsSVG2JSX;
