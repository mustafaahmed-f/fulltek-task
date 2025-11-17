import AddTemplateIcon from "@/icons/AddTemplateIcon";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const fastReplies = [
  "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
  "أهلا، تم استلام طلبكم وجاري معالجته",
  "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
  "أهلا، تم استلام طلبكم وجاري معالجته",
  "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
  "أهلا، تم استلام طلبكم وجاري معالجته",
];

function TextEditorHeader() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);
  const [maxScroll, setMaxScroll] = useState(100);

  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollable = container.scrollWidth - container.clientWidth;

    setMaxScroll(scrollable > 0 ? scrollable : 100);
  }, []);

  function handleRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (!scrollRef.current) return;

    scrollRef.current.scrollLeft = value;
    setRange(value);
  }

  return (
    <div className="flex w-full flex-col items-start gap-3 max-sm:gap-1 sm:flex-row">
      <p className="mt-4 font-semibold text-[#7A8699]">{t("FastRepleys")}</p>
      <div className="flex w-full flex-1 flex-col gap-2 overflow-hidden pb-2">
        <div
          ref={scrollRef}
          className="flex flex-1 flex-nowrap gap-1 overflow-x-auto rounded-xl bg-[#F7F8FA] p-2 scrollbar-hide"
        >
          {fastReplies.map((repley, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-nowrap rounded-xl border-2 px-2 py-1"
            >
              {repley}
            </div>
          ))}
        </div>
        <input
          id="replies-range"
          type="range"
          value={range}
          onChange={handleRangeChange}
          min={0}
          max={maxScroll}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-fulltek-sidebar-border pb-1"
        ></input>
      </div>
      <div className="flex items-center gap-1 rounded-lg border-2 border-fulltek-sidebar-border px-2 py-3">
        <AddTemplateIcon />
        <p>{t("CreateFromTemplate")}</p>
      </div>
    </div>
  );
}

export default TextEditorHeader;
