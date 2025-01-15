export type ISVGOptionsGroup<T> = {
  name: string
  options: T[]
};

export type ISvgOptions = {
  id: string
  name: string
  description?: string
  value: string | number | boolean
};

const SvgOptions: ISVGOptionsGroup<ISvgOptions>[] = [
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

export default SvgOptions
