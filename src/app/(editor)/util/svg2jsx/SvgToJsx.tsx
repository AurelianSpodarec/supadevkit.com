class SvgToJsx {
  private svgCode: string;

  constructor(svgCode?: string) {
    this.svgCode = svgCode || ''; // Initialize with empty string if SVG is not provided
    this.convertClassToClassName()
  }

  /**
   * Convert all `class` attributes to `className` for JSX compatibility
   */
  private convertClassToClassName(): void {
    this.svgCode = this.svgCode.replace(/\bclass\s*=\s*"/g, 'className="');
  }

  /**
   * Remove comments from the SVG code
   * @returns {string} - SVG code without comments
   */
  removeComments(): void {
    this.svgCode = this.svgCode.replace(/<!--.*?-->/gs, '').trim();
  }

  /**
   * Minify the SVG code (e.g., remove whitespace, simplify structure)
   * @returns {string} - Minified SVG code
   */
  minifySVG(): void {
    this.svgCode = this.svgCode.replace(/\s+/g, ' ').trim(); // Example minification
  }

  /**
   * Get the processed SVG code
   * @returns {string} - Final processed SVG code
   */
  getProcessedSvg(): string {
    return this.svgCode;
  }
}

export default SvgToJsx;
