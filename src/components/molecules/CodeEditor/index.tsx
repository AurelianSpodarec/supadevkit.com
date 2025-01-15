import ReactCodeMirror, { EditorView, ReactCodeMirrorProps } from '@uiw/react-codemirror';
// import { copilot } from "@uiw/codemirror-theme-copilot";
import { andromeda } from "@uiw/codemirror-theme-andromeda"
// import { material } from "@uiw/codemirror-theme-material";
import { Extension } from '@codemirror/state';

export interface ICodeEditorProps extends Omit<ReactCodeMirrorProps, 'lang'> {
  lang: Extension
}

function CodeEditor({ lang, value, readOnly, onChange, ...props }: ICodeEditorProps) {
  return (
    <ReactCodeMirror
      {...props}
      value={value}
      theme={andromeda}
      readOnly={readOnly}
      className="h-full w-full wrap text-wrap"
      height="100%"
      onChange={onChange}
      extensions={[lang, EditorView.lineWrapping]}
    />
  );
}

export default CodeEditor;
