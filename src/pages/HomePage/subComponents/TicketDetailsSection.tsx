import { useTranslation } from "react-i18next";
import TicketSingleOption from "./TicketSingleOption";
import TicketOptions from "./TicketOptions";
import TicketOptionDetails from "./TicketOptionDetails";

interface TicketDetailsSectionProps {}

function TicketDetailsSection({}: TicketDetailsSectionProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className={`flex h-full min-w-[71px] flex-row`}>
      <TicketOptionDetails />
      <TicketOptions />
    </div>
  );
}

export default TicketDetailsSection;
