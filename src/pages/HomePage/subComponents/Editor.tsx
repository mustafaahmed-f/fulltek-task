import ExpandIcon from "@/icons/ExpandIcon";
import SmallSearchIcon from "@/icons/SmallSearchIcon";
import { useTranslation } from "react-i18next";

interface EditorProps {}

function Editor({}: EditorProps) {
  const { t } = useTranslation();
  return (
    <div className="h-full w-full flex-1 rounded-xl border-2 border-fulltek-sidebar-border">
      {/* //* Reply section */}
      <div className="grid w-full grid-cols-[auto_1fr] grid-rows-2 gap-2 border-b-2 border-b-fulltek-sidebar-border p-1 sm:p-2">
        <div className="flex items-center justify-center text-nowrap">
          <p>{t("ReplyTo")} : </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="rounded-full border-2 border-fulltek-sidebar-border px-2 py-1 text-[#7A8699]">
            ahmed@example.com
          </div>
          <div className="flex items-center gap-2">
            <div className="text-nowrap rounded-lg bg-fulltek-primary px-3 py-2 text-white">
              cc
            </div>
            <div className="rounded-lg border-2 border-fulltek-sidebar-border p-3">
              <ExpandIcon />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>cc : </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-xl bg-[#E2E8F0] p-1">
            <SmallSearchIcon />
            <input
              className="bg-transparent px-2 py-1 outline-none ring-0 placeholder:text-[#7A8699] focus:ring-0"
              placeholder="ادخل الاسم"
            />
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <div className="rounded-full border-2 border-fulltek-sidebar-border px-2 py-1 text-[#7A8699]">
              ahmed@example.com
            </div>
            <div className="rounded-full border-2 border-fulltek-sidebar-border px-2 py-1 text-[#7A8699]">
              ahmed@example.com
            </div>
            <div className="rounded-full border-2 border-fulltek-sidebar-border px-2 py-1 text-[#7A8699]">
              ahmed@example.com
            </div>
          </div>
        </div>
      </div>
      {/* //* Text rich editor */}
      <div></div>
    </div>
  );
}

export default Editor;
