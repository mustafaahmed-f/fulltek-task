import { Plus } from "lucide-react";
import { tickets } from "../utils/TicketsArray";
import SingleTab from "./SingleTab";

interface TicketsTabsProps {
  activeTicket: number;
  setActiveTicket: React.Dispatch<React.SetStateAction<number>>;
}

function TicketsTabs({ activeTicket, setActiveTicket }: TicketsTabsProps) {
  return (
    <div className="flex w-full pe-2">
      <div className="flex w-fit items-center border-b-2 border-b-white">
        {tickets.map((ticket) => (
          <SingleTab
            key={ticket.id}
            id={ticket.id}
            isActive={activeTicket === Number(ticket.id)}
            title={ticket.title}
            orderNumber={ticket.orderNumber}
            setActiveTicket={setActiveTicket}
          />
        ))}
      </div>
      <div className="flex min-h-full w-full flex-1 items-center border-b-2 border-b-fulltek-sidebar-border ps-3">
        <div className="hover:bg-fulltek-backgroundHover cursor-pointer items-center rounded-md border-2 border-fulltek-sidebar-border px-3 py-2 text-xl font-semibold text-black">
          <Plus />
        </div>
      </div>
    </div>
  );
}

export default TicketsTabs;
