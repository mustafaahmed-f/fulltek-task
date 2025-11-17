import { useState } from "react";
import MainSection from "./subComponents/MainSection";
import TicketsTabs from "./subComponents/TicketsTabs";

export const HomePage = () => {
  const [activeTicket, setActiveTicket] = useState(1);
  return (
    <div className="h-full max-sm:overflow-x-scroll">
      <TicketsTabs
        activeTicket={activeTicket}
        setActiveTicket={setActiveTicket}
      />
      <MainSection activeTicket={activeTicket} />
    </div>
  );
};
