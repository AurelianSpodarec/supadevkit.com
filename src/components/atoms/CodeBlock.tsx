'use client';

import { useState, useEffect, JSX } from 'react';
import highlight from './Highlight';

interface CodeBlockProps {
  initialCode: string; // Initial raw code from the parent
  lang: string;        // Language for syntax highlighting
}

export function CodeBlock({ initialCode, lang }: CodeBlockProps) {
  const [code, setCode] = useState(initialCode);  // Manage the raw code
  const [renderedCode, setRenderedCode] = useState<JSX.Element | null>(null);

  useEffect(() => {
    // Highlight the initial code and update the rendered output
    void highlight(code, lang as any).then(setRenderedCode);
  }, [code, lang]); // Re-render when `code` or `lang` changes

  // Example: User edits the code (this is optional and for demonstration)
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="text-sm">
      {renderedCode ?? <div></div>}
    </div>
  );
}
