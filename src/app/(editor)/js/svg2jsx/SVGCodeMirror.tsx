import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { material } from "@uiw/codemirror-theme-material";

function SVGCodeMirror({ value, readOnly }) {
  return (
    <CodeMirror
      value={value}
      theme={material}
      readOnly={readOnly}
      className="h-full w-full wrap text-wrap"
      height="100%"
      extensions={[html(), EditorView.lineWrapping]}
    />
  )
}

export default SVGCodeMirror
