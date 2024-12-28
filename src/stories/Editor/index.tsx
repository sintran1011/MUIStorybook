import { CSSProperties, useRef } from 'react';
import { Editor as TOASTEditor } from '@toast-ui/react-editor';
import colorPlugin from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { StyledEditorWrapper } from './styled';
import { TOOLBAR_ITEMS } from '@constants/index';

interface EditorProps {
  value?: string;
  onChange?: (val: string) => void;
  style?: CSSProperties;
}

const Editor = (props: EditorProps) => {
  const { value, onChange = () => {}, style } = props;
  const editorRef = useRef<TOASTEditor>(null);

  const handleChange = () => {
    if (editorRef && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const markdownContent = editorInstance.getMarkdown();
      onChange(markdownContent);
    }
  };

  return (
    <StyledEditorWrapper style={style}>
      <TOASTEditor
        ref={editorRef}
        initialValue={value}
        initialEditType="wysiwyg"
        previewStyle="vertical"
        height="400px"
        usageStatistics={false}
        toolbarItems={TOOLBAR_ITEMS}
        plugins={[colorPlugin]}
        onChange={handleChange}
      />
    </StyledEditorWrapper>
  );
};

export default Editor;
