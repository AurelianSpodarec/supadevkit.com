import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { material } from "@uiw/codemirror-theme-material";
import CodeEditor from '@/components/molecules/CodeEditor';

function SVGCodeMirror({ value, readOnly }) {
  return (
    <CodeEditor
      value={value}
      readOnly={readOnly}
      lang={html()}
    />
  )
}

export default SVGCodeMirror
