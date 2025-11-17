import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IMessage } from "../types/IMessages";
import { useTranslation } from "react-i18next";
import { Mail, Reply } from "lucide-react";
import ThreeDotsIcon from "@/icons/ThreeDotsIcon";
import { useState } from "react";
import { open } from "node:inspector/promises";

function SingleMessage({
  msgId,
  avatar,
  date,
  message,
  receiver,
  sender,
  time,
  timeType,
  cc,
}: IMessage) {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<any>("");
  console.log("openItem");
  return (
    <AccordionItem
      value={msgId}
      className="accordion-item mb-4 rounded-xl border-2 border-fulltek-sidebar-border px-3 py-1"
    >
      <AccordionTrigger
        value={openItem}
        onChange={(event) => setOpenItem(event.currentTarget.value)}
      >
        <div className="flex items-center gap-2">
          <div className="overflow-hidden rounded-full">
            <img src={"./man2.png"} alt="man2" className="h-10 w-10" />
          </div>
          <div className="flex flex-col gap-1 text-xs text-[#7A8699]">
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-black">{sender}</p>
              <p className="mt-2">{date}</p>
              <div className="mt-2 flex items-center gap-1">
                <p>{time}</p>
                <p>{t(timeType)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Reply size={14} />
                <p>
                  {t("SentTo")} {receiver}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <div className="flex flex-wrap">
                  {cc.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <p>{"<" + item + ">"}</p>
                      {index !== cc.length - 1 && ", "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* This is the default accordion arrow */}
          <span className="toggleArrow shrink-0 transition-transform hover:bg-fulltek-backgroundHover">
            {/* If using ShadCN, the arrow is usually an SVG here */}
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-0 transition-transform"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>

          {/* Three dots */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full text-black hover:bg-fulltek-backgroundHover">
            <ThreeDotsIcon />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>{message}</p>
      </AccordionContent>
    </AccordionItem>
  );
}

export default SingleMessage;
