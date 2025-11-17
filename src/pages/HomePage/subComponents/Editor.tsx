import ArrowUp from "@/icons/ArrowUp";
import AttachmentIcon from "@/icons/AttachmentIcon";
import ExpandIcon from "@/icons/ExpandIcon";
import FontIcon from "@/icons/FontIcon";
import SmallSearchIcon from "@/icons/SmallSearchIcon";
import StarIcon from "@/icons/StarIcon";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface EditorProps {
  onSend: (text: string) => void;
}

function Editor({ onSend }: EditorProps) {
  const { t } = useTranslation();
  const { 0: value, 1: setValue } = useState("");

  return (
    <div className="h-full w-full flex-1 rounded-xl border-2 border-fulltek-sidebar-border">
      {/* //* Reply section */}
      <div className="grid w-full grid-cols-[auto_1fr] grid-rows-2 gap-2 border-b-2 border-b-fulltek-sidebar-border p-1 sm:p-2">
        <div className="flex items-center justify-start text-nowrap">
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
        <div className="flex items-center justify-start">
          <p>cc : </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-xl bg-[#E2E8F0] p-1 ps-3">
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
      <div className="flex w-full flex-col p-2 sm:p-3">
        <textarea
          rows={2}
          className="resize-none p-2 outline-none focus:ring-0"
          placeholder={t("AddReply") + "..."}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="cursor-pointer">
              <FontIcon />
            </span>
            <span className="cursor-pointer">
              <StarIcon />
            </span>
            <span className="cursor-pointer">
              <AttachmentIcon />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setValue("")}
              className="flex items-center gap-1 rounded-lg border-2 border-fulltek-sidebar-border px-3 py-2 text-[#7A8699]"
            >
              <p>{t("Cancle")}</p>
              <XIcon />
            </button>
            <button
              onClick={() => {
                if (!value) return;
                onSend(value);
                setValue("");
              }}
              className="flex items-center gap-1 rounded-lg bg-fulltek-primary px-3 py-2 text-white"
            >
              <p>{t("AddReply")}</p>
              <span>|</span>
              <span className="mt-2">
                <ArrowUp />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
