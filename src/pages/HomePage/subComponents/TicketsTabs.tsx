import { Plus } from "lucide-react";
import { tickets } from "../utils/TicketsArray";
import SingleTab from "./SingleTab";
import { useRef } from "react";
import { useAtom } from "jotai";
import { tabsHeightAtom } from "@/atoms/LayoutAtoms";

interface TicketsTabsProps {
  activeTicket: number;
  setActiveTicket: React.Dispatch<React.SetStateAction<number>>;
}

function TicketsTabs({ activeTicket, setActiveTicket }: TicketsTabsProps) {
  const ticketsRef = useRef<HTMLDivElement>(null);
  const [tabsHeight, setTabsHeight] = useAtom(tabsHeightAtom);

  if (ticketsRef.current) {
    setTabsHeight(ticketsRef.current.clientHeight);
  }
  return (
    <div
      ref={ticketsRef}
      className="scrollbar-hide flex w-full min-w-0 overflow-x-auto pe-2"
    >
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
        <div className="cursor-pointer items-center rounded-md border-2 border-fulltek-sidebar-border px-3 py-2 text-xl font-semibold text-black hover:bg-fulltek-backgroundHover">
          <Plus size={15} />
        </div>
      </div>
    </div>
  );
}

export default TicketsTabs;
