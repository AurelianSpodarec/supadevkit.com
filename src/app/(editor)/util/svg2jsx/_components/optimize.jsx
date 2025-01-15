// import { optimize } from 'svgo';
import { optimize } from "svgo/dist/svgo.browser";
// import { transform } from '@svgr/core';

// import convert from "@svgr/core/lib/convert";
// import wop from "@svgr/babel-plugin-transform-svg-component"
// import JSXPlugin from "@svgr/plugin-jsx";

// const wop = await new Promise((resolve) => {
//   convert(svg, {
//     prettier: false,
//     svgo: false,
//     jsxRuntime: "automatic",
//     plugins: [JSXPlugin],
//   })
//     .then((jsx) => {
//       console.log(jsx);
//       resolve(jsx); // Resolve the promise with the jsx value
//     })
//     .catch((error) => {
//       console.error(error); // Handle any errors
//       resolve(null); // Optionally resolve with null or throw an error
//     });
// });

export const optimizeSvg = (svgString, options) => {
  const { removeComments, preserveLegalComments } = options;

  const plugins = [];

  if (removeComments) {
    if (!preserveLegalComments) {
      plugins.push({
        name: "removeComments",
        params: {
          preservePatterns: [],
        },
      });
    } else {
      plugins.push("removeComments");
    }
  }

  plugins.push("removeDoctype", "removeXMLProcInst", "removeTitle", "removeDesc");

  const result = optimize(svgString, {
    plugins,
  });

  return result.data;
};

// const convertSvgToReact = async (svg) => {
//   const componentCode = await transform(svg, { icon: true }); // Convert to React
//   return componentCode; // Return the React component code
// };

// const handleOptimize = async () => {
//   try {
//     // Step 1: Optimize the SVG
//     const optimizedSvg = optimizeSvg(initialCode, options);

//     // Step 2: Convert the optimized SVG to React component code
//     const reactCode = await convertSvgToReact(optimizedSvg);

//     // Set the converted React code in the state
//     setConvertedCode(reactCode);
//   } catch (err) {
//     console.log("Failed to optimize SVG. Please check your input.", err);
//   }
// };
