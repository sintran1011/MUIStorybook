import colorPlugin from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor as TOASTEditor, Viewer } from "@toast-ui/react-editor";
import { CSSProperties, useEffect, useRef, useState } from "react";
import "tui-color-picker/dist/tui-color-picker.css";

import { FileUpload } from "../Upload";
import { StyledEditorWrapper } from "./styled";
import { TOOLBAR_ITEMS } from "@constants/index";

interface EditorProps {
  value?: string;
  onChange?: (val: string) => void;
  style?: CSSProperties;
  readOnly?: boolean;
}

const Editor = (props: EditorProps) => {
  const { value = " ", onChange = () => {}, style, readOnly = false } = props;
  const editorRef = useRef<TOASTEditor>(null);
  const viewerRef = useRef<Viewer>(null);
  const [editorValue, setEditorValue] = useState(value);

  // Handle editor content changes
  const handleChange = () => {
    if (editorRef && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const markdownContent = editorInstance.getMarkdown();
      setEditorValue(markdownContent);
      onChange(markdownContent);
    }
  };

  // Update content when value changes
  useEffect(() => {
    if (value !== editorValue) {
      setEditorValue(value);
      if (readOnly && viewerRef.current) {
        // Force viewer update
        const viewerInstance = viewerRef.current.getInstance();
        viewerInstance.setMarkdown(value);
      } else if (editorRef.current) {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(value);
      }
    }
  }, [value, readOnly]);

  return (
    <StyledEditorWrapper style={style}>
      {readOnly ? (
        <Viewer
          ref={viewerRef}
          initialValue={value}
          // style={{ height: "400px" }}
        />
      ) : (
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
          hooks={{
            // addImageBlobHook: handleImageUpload,
          }}
        />
      )}
    </StyledEditorWrapper>
  );
};

export default Editor;

Editor.displayName = "Editor";
