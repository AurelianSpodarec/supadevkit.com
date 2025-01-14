import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { material } from "@uiw/codemirror-theme-material";

function CodeEditor({ lang, value, readOnly, onChange }) {
  return (
    <CodeMirror
      value={value}
      theme={material}
      readOnly={readOnly}
      className="h-full w-full wrap text-wrap"
      height="100%"
      onChange={onChange}
      extensions={[lang, EditorView.lineWrapping]}
    />
  )
}

export default CodeEditor
