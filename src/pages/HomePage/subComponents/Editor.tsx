interface EditorProps {}

function Editor({}: EditorProps) {
  return (
    <div className="h-full w-full flex-1 rounded-xl border-2 border-fulltek-sidebar-border p-1 sm:p-2">
      <div className="flex flex-col border-b-2 border-b-fulltek-sidebar-border"></div>
      <div></div>
    </div>
  );
}

export default Editor;
