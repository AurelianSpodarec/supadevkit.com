import { html } from '@codemirror/lang-html';
import CodeEditor, { ICodeEditorProps } from '@/components/molecules/CodeEditor';

interface ISVGCodeMirrorProps extends Omit<ICodeEditorProps, 'lang'> {}

function SVGCodeMirror({ value, readOnly, onChange }: ISVGCodeMirrorProps) {
  return (
    <CodeEditor
      value={value}
      readOnly={readOnly}
      lang={html()}
      onChange={onChange}
    />
  )
}

export default SVGCodeMirror
