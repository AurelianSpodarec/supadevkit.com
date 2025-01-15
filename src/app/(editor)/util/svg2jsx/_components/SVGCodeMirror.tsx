import CodeEditor, { ICodeEditorProps } from '@/components/molecules/CodeEditor';

function SVGCodeMirror({ value, readOnly, onChange, lang }: ICodeEditorProps) {
  return (
    <CodeEditor
      value={value}
      readOnly={readOnly}
      lang={lang}
      onChange={onChange}
    />
  )
}

export default SVGCodeMirror
