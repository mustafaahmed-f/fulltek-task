import { CurrentTicketAtom } from "@/atoms/CurrentTicketAtom";

import { useAtom } from "jotai";
import { Plus } from "lucide-react";
import { useRef } from "react";
import { tickets } from "../utils/TicketsArray";
import SingleTab from "./SingleTab";

function TicketsTabs() {
  const [currentTicket, setCurrentTicket] = useAtom(CurrentTicketAtom);

  return (
    <div className="flex w-full min-w-0 overflow-x-auto pe-2 scrollbar-hide">
      <div className="flex w-fit items-center border-b-2 border-b-white">
        {tickets.map((ticket) => (
          <SingleTab
            key={ticket.id}
            id={ticket.id}
            isActive={currentTicket === Number(ticket.id)}
            title={ticket.title}
            orderNumber={ticket.orderNumber}
            setActiveTicket={setCurrentTicket}
          />
        ))}
      </div>
      <div className="flex min-h-full w-full flex-1 items-center border-b-2 border-b-fulltek-sidebar-border ps-3">
        <div className="cursor-pointer items-center rounded-md border-2 border-fulltek-sidebar-border px-3 py-2 text-xl font-semibold text-black hover:bg-fulltek-backgroundHover">
          <Plus size={15} />
        </div>
      </div>
    </div>
  );
}

export default TicketsTabs;
