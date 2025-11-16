import TicketConversation from "./TicketConversation";
import TicketDetailsSection from "./TicketDetailsSection";

interface MainSectionProps {}

function MainSection({}: MainSectionProps) {
  return (
    <div className="flex h-full w-full">
      <TicketConversation />
      <TicketDetailsSection />
    </div>
  );
}

export default MainSection;
