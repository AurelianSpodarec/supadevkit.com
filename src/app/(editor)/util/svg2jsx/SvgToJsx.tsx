class SvgToJsx {
  private svgCode: string;

  constructor(svgCode?: string) {
    this.svgCode = svgCode || ''; // Initialize with empty string if SVG is not provided
    this.convertClassToClassName()
    this.convertRectToPath()
    this.convertSvgStyleToReact()
    this.convertUseToElement()
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

  convertRectToPath(): void {
    const parser = new DOMParser();
    const serializer = new XMLSerializer();
    const doc = parser.parseFromString(this.svgCode, 'image/svg+xml');
    const rects = doc.querySelectorAll('rect');

    rects.forEach(rect => {
      const x = parseFloat(rect.getAttribute('x') || '0');
      const y = parseFloat(rect.getAttribute('y') || '0');
      const width = parseFloat(rect.getAttribute('width') || '0');
      const height = parseFloat(rect.getAttribute('height') || '0');
      const style = rect.getAttribute('style') || '';

      // Parse style to extract fill and stroke colors
      const styles: Record<string, string> = {};
      style.split(';').forEach(rule => {
        const [key, value] = rule.split(':').map(s => s.trim());
        if (key && value) styles[key] = value;
      });

      const fill = styles['fill'] || rect.getAttribute('fill') || 'none';
      const stroke = styles['stroke'] || rect.getAttribute('stroke') || 'none';

      // Construct the path data string with 'H' for horizontal lines
      const d = `M${x} ${y}h${width}v${height}H${x}Z`;

      // Create a new <path> element
      const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      if (fill !== 'none') path.setAttribute('fill', this.convertColorToShortHex(fill));
      if (stroke !== 'none') path.setAttribute('stroke', stroke);

      // Replace the <rect> with the <path>
      rect.parentNode?.replaceChild(path, rect);
    });

    // Update the svgCode with the modified SVG string
    this.svgCode = serializer.serializeToString(doc.documentElement);
  }

  /**
   * Convert colors to short hex format if possible
   */
  private convertColorToShortHex(color: string): string {
    // Convert the color to uppercase for uniformity
    const hexMatch = color.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i);
    if (hexMatch) {
      // Short hex conversion for 6-digit hex
      if (hexMatch[1].length === 6) {
        return `#${hexMatch[1].slice(0, 1)}${hexMatch[1].slice(2, 3)}${hexMatch[1].slice(4, 5)}`.toUpperCase();
      }
      return `#${hexMatch[1].toUpperCase()}`;
    }

    const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      const [_, r, g, b] = rgbMatch.map(Number);
      const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      return hexColor.length === 7 ? `#${hexColor[1]}${hexColor[3]}${hexColor[5]}` : hexColor;
    }

    return color.trim();
  }
  
  private convertUseToElement(): void {
    const parser = new DOMParser();
    const serializer = new XMLSerializer();
    const doc = parser.parseFromString(this.svgCode, 'image/svg+xml');
  
    const uses = doc.querySelectorAll('use');
  
    uses.forEach(use => {
      const href = use.getAttribute('xlink:href')?.replace(/^#/, ''); // Remove the "#" to get the ID
      if (href) {
        const referencedElement = doc.getElementById(href);
        if (referencedElement) {
          const clonedElement = referencedElement.cloneNode(true); // Clone the referenced element
          
          // Copy any necessary attributes from the <use> element to the cloned element
          for (const attr of use.attributes) {
            clonedElement.setAttribute(attr.name, attr.value);
          }
          
          // Replace the <use> tag with the cloned element
          use.parentNode?.replaceChild(clonedElement, use);
        }
      }
    });
  
    // Update the svgCode with the modified SVG string
    this.svgCode = serializer.serializeToString(doc.documentElement);
  }
  

  convertSvgStyleToReact(): void {
    // Use regex to match the style attribute and extract its contents
    const styleMatch = this.svgCode.match(/style="([^"]*)"/);

    if (styleMatch) {
      const styleString = styleMatch[1]; // Extract the styles from the match
      const styleObject: Record<string, string | number> = {};

      // Split the styles by semicolon and process each one
      const styles = styleString.split(';').map(style => style.trim());

      styles.forEach(style => {
        if (style) {
          const [key, value] = style.split(':').map(s => s.trim());
          // Convert the key to camelCase for React
          const camelCaseKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
          // Assign the value to the camelCase key in the style object
          styleObject[camelCaseKey] = isNaN(Number(value)) ? value : Number(value);
        }
      });

      // Format the style object as a nicely indented string
      const formattedStyle = Object.entries(styleObject)
        .map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`)
        .join(',\n');

      // Replace the original style with the formatted style object
      this.svgCode = this.svgCode.replace(styleMatch[0], `style={{\n${formattedStyle}\n}}`);
    }
  }

  getProcessedSvg(): string {
    return this.svgCode;
  }
}

export default SvgToJsx;
