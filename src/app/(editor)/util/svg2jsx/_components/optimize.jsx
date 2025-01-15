import { optimize } from "svgo/dist/svgo.browser";

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
