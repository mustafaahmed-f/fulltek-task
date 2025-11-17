import Editor from "./Editor";
import TextEditorHeader from "./TextEditorHeader";
// import { Plate, usePlateEditor } from "platejs/react";

interface TextEditorProps {
  onSend: (text: string) => void;
}

function TextEditor({ onSend }: TextEditorProps) {
  return (
    <div className="flex min-h-[318px] w-full flex-col items-center gap-2 border-t-2 border-t-fulltek-sidebar-border p-3 sm:p-5">
      <TextEditorHeader />
      <Editor onSend={onSend} />
    </div>
  );
}

export default TextEditor;
