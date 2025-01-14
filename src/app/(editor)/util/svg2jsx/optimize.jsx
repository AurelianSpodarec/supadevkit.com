import { optimize } from 'svgo';

export const optimizeSvg = (svgString, options) => {
  const { removeComments, preserveLegalComments } = options;

  const plugins = [];

  if (removeComments) {
    if (!preserveLegalComments) {
      plugins.push({
        name: 'removeComments',
        params: {
          preservePatterns: [],
        },
      });
    } else {
      plugins.push('removeComments');
    }
  }

  plugins.push('removeDoctype', 'removeXMLProcInst');

  const result = optimize(svgString, {
    plugins,
  });

  return result.data
};
