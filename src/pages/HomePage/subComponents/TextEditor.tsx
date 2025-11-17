import { useState } from "react";
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
} from "@platejs/basic-nodes/react";
import { usePlateEditor } from "platejs/react";
import TextEditorHeader from "./TextEditorHeader";
import Editor from "./Editor";
// import { Plate, usePlateEditor } from "platejs/react";

interface TextEditorProps {
  onSend: (text: string) => void;
}

function TextEditor({ onSend }: TextEditorProps) {
  const [value, setValue] = useState<any>([
    { type: "p", children: [{ text: "" }] },
  ]);

  const editor = usePlateEditor({
    plugins: [BoldPlugin, ItalicPlugin, UnderlinePlugin], // Add the mark plugins
    value: value, // Set initial content
  });
  return (
    <div className="flex min-h-[318px] w-full flex-col items-center gap-2 border-t-2 border-t-fulltek-sidebar-border p-3 sm:p-5">
      <TextEditorHeader />
      <Editor />
    </div>
  );
}

export default TextEditor;
