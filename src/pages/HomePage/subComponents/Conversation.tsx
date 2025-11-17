import { Accordion } from "@/components/ui/accordion";
import { ITicket } from "../types/Ticket";
import SingleMessage from "./SingleMessage";
import { useAtomValue } from "jotai";
import { CurrentTicketAtom } from "@/atoms/CurrentTicketAtom";
import { useEffect, useRef } from "react";

interface ConversationProps {
  ticketDetails: ITicket;
}

function Conversation({ ticketDetails }: ConversationProps) {
  const activeTicket = useAtomValue(CurrentTicketAtom);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [ticketDetails.messages]);

  return (
    <div
      ref={scrollRef}
      className="h-full max-h-[300px] w-full flex-1 overflow-y-auto p-3 scrollbar-hide sm:p-5"
    >
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={
          String(activeTicket) + String(ticketDetails.messages.length)
        }
      >
        {ticketDetails.messages.map((message) => (
          <SingleMessage key={message.msgId} {...message} />
        ))}
      </Accordion>
    </div>
  );
}

export default Conversation;
