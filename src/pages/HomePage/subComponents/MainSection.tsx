import TicketConversation from "./TicketConversation";
import TicketDetailsSection from "./TicketDetailsSection";

interface MainSectionProps {
  activeTicket: number;
}

function MainSection({ activeTicket }: MainSectionProps) {
  return (
    <div className="flex h-full w-full">
      <TicketConversation />
      <TicketDetailsSection />
    </div>
  );
}

export default MainSection;
