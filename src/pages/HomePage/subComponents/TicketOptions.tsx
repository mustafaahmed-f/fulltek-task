import { useTranslation } from "react-i18next";
import TicketSingleOption from "./TicketSingleOption";
import ActionsIcon from "@/icons/ActionsIcon";
import CommunicationDataIcon from "@/icons/CommunicationDataIcon";
import LinkedTicketsIcon from "@/icons/LinkedTicketsIcon";
import DetailsIcon from "@/icons/DetailsIcon";
import ChronologicalRecordsIcon from "@/icons/ChronologicalRecordsIcon";

interface TicketOptionsProps {}

function TicketOptions({}: TicketOptionsProps) {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`flex min-w-[71px] flex-col items-center gap-2 px-2 py-5 ${i18n.language === "ar" ? "border-r-2 border-r-fulltek-sidebar-border" : "border-l-2 border-l-fulltek-sidebar-border"}`}
    >
      <TicketSingleOption title={t("Actions")}>
        <ActionsIcon />
      </TicketSingleOption>
      <TicketSingleOption title={t("CommunicationData")}>
        <CommunicationDataIcon />
      </TicketSingleOption>
      <TicketSingleOption title={t("LinkedTickets")}>
        <LinkedTicketsIcon />
      </TicketSingleOption>
      <TicketSingleOption title={t("Details")}>
        <DetailsIcon />
      </TicketSingleOption>
      <TicketSingleOption title={t("ChronologicalRecords")} isActive>
        <ChronologicalRecordsIcon />
      </TicketSingleOption>
    </div>
  );
}

export default TicketOptions;
