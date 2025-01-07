'use client';

import { useState, useEffect, JSX } from 'react';
import highlight from './Highlight';

interface CodeBlockProps {
  initialCode: string
  lang: string  
}

export function CodeBlock({ initialCode, lang }: CodeBlockProps) {
  const [code, setCode] = useState(initialCode); // Manage the raw code
  const [renderedCode, setRenderedCode] = useState<JSX.Element | null>(null);

  // Update `code` whenever `initialCode` changes
  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  useEffect(() => {
    // Highlight the updated code and update the rendered output
    void highlight(code, lang as any).then(setRenderedCode);
  }, [code, lang]); // Re-render when `code` or `lang` changes

  return (
    <div className="text-xs">
      {renderedCode ?? <div></div>}
    </div>
  );
}
