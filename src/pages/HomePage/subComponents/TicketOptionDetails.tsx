import { useTranslation } from "react-i18next";
import { RecordsArray } from "../utils/RecordsArray";
import SingleRecord from "./SingleRecord";
import { useAtomValue } from "jotai";
import { headerHeightAtom, tabsHeightAtom } from "@/atoms/LayoutAtoms";
import { useEffect, useState } from "react";

interface TicketOptionDetailsProps {}

function TicketOptionDetails({}: TicketOptionDetailsProps) {
  const { t } = useTranslation();
  const headerHeight = useAtomValue(headerHeightAtom);
  const tabsHeight = useAtomValue(tabsHeightAtom);
  const { 0: finalHeight, 1: setFinalHeight } = useState<number>(
    window.innerHeight - (headerHeight + tabsHeight),
  );

  // const finalHeight = window.innerHeight - (headerHeight + tabsHeight);
  // console.log("Final headerHeight : ", finalHeight);
  useEffect(() => {
    function handlerResize() {
      setFinalHeight(window.innerHeight - (headerHeight + tabsHeight));
    }

    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, [setFinalHeight]);
  return (
    <div
      className="max-h-full min-w-0 max-w-[250px] overflow-x-hidden overflow-y-scroll scrollbar-hide"
      style={{
        height: finalHeight + 20,
        // maxHeight: finalHeight + 20,
      }}
    >
      <div className="mb-2 flex items-center gap-2 p-3 text-lg">
        <p className="">{t("ChronologicalRecords")}</p>
        <div className="rounded-md border-2 border-fulltek-sidebar-border px-3 py-2">
          5
        </div>
      </div>
      <div className="mb-5 flex flex-col gap-1 p-3">
        {RecordsArray.map((record, i) => (
          <SingleRecord
            {...record}
            isLast={i === RecordsArray.length - 1}
            key={record.id}
          />
        ))}
      </div>
    </div>
  );
}

export default TicketOptionDetails;
