import { useTranslation } from "react-i18next";
import { RecordsArray } from "../utils/RecordsArray";
import SingleRecord from "./SingleRecord";

interface TicketOptionDetailsProps {}

function TicketOptionDetails({}: TicketOptionDetailsProps) {
  const { t } = useTranslation();
  return (
    <div className="min-w-0 max-w-[250px] overflow-hidden">
      <div className="mb-5 mt-4 flex items-center gap-2 p-3 text-lg">
        <p className="">{t("ChronologicalRecords")}</p>
        <div className="rounded-md border-2 border-fulltek-sidebar-border px-3 py-2">
          5
        </div>
      </div>
      <div className="mb-10 flex flex-col gap-5 p-3">
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
