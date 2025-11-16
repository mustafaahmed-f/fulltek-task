import { useTranslation } from "react-i18next";
import TicketSingleOption from "./TicketSingleOption";
import TicketOptions from "./TicketOptions";

interface TicketDetailsSectionProps {}

function TicketDetailsSection({}: TicketDetailsSectionProps) {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`flex h-full flex-row ${i18n.language === "ar" ? "border-r-2 border-r-fulltek-sidebar-border" : "border-l-2 border-l-fulltek-sidebar-border"}`}
    >
      <TicketSingleOption />
      <TicketOptions />
    </div>
  );
}

export default TicketDetailsSection;
