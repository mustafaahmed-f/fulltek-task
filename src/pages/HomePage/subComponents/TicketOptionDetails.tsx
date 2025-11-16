import { useTranslation } from "react-i18next";
import { RecordsArray } from "../utils/RecordsArray";
import SingleRecord from "./SingleRecord";

interface TicketOptionDetailsProps {}

function TicketOptionDetails({}: TicketOptionDetailsProps) {
  const { t } = useTranslation();
  return (
    <div className="max-w-[250px] p-3 pb-10 pt-4">
      <div className="mb-8 flex items-center gap-2 text-lg">
        <p className="">{t("ChronologicalRecords")}</p>
        <div className="rounded-md border-2 border-fulltek-sidebar-border px-3 py-2">
          5
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {RecordsArray.map((record, i) => (
          <SingleRecord {...record} isLast={i === RecordsArray.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default TicketOptionDetails;
