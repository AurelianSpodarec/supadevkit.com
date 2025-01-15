import React from "react";

import { Metadata } from "next";
import PageContent from "./_components/PageContent";

export const metadata: Metadata = {
  title: "SVG2JSX | SupaToolkit",
  description: "Convert SVG to JSX. A fast way to create compatible React components from SVG files.",
  keywords: "svg2jsx, SVG to JSX, convert SVG to JSX, React SVG converter, SVG JSX generator, SVG React components, html to jsx, html2jsx, jsx2html, jsx to html, convert jsx to svg",
  openGraph: {
    title: "SupaToolkit | SVG2JSX",
    description: "Convert SVG files to JSX for React instantly. Fast, free, and easy to use.",
    url: "https://supatoolkit.com/svg2jsx",
    images: [
      {
        url: "https://supatoolkit.com/og-image.png",
        alt: "SVG to JSX Converter Screenshot",
      },
    ],
  }
};

function PageJsSVG2JSX() {
  return <PageContent />
}

export default PageJsSVG2JSX;
