import { CurrentTicketAtom } from "@/atoms/CurrentTicketAtom";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { tickets as ticketsArray } from "../utils/TicketsArray";
import Conversation from "./Conversation";
import TextEditor from "./TextEditor";
import TicketHeader from "./TicketHeader";

function TicketConversation() {
  const [tickets, setTickets] = useState(ticketsArray);
  const { t } = useTranslation();
  const activeTicket = useAtomValue(CurrentTicketAtom);
  const ticketDetails = tickets.find(
    (ticket) => ticket.id === String(activeTicket),
  );

  const addMessage = (text: string) => {
    setTickets((prev) =>
      prev.map((t) =>
        Number(t.id) === activeTicket
          ? {
              ...t,
              messages: [
                ...t.messages,
                {
                  msgId: String(activeTicket) + String(t.messages.length + 1),
                  sender: "محمد صفر",
                  receiver: "راشد فهد",
                  cc: ["ahmed@example.com", "rashedf@example.com"],
                  avatar: "./man2.png",
                  date: "2025-01-29",
                  time: "10:00",
                  timeType: "PM",
                  message: text,
                },
              ],
            }
          : t,
      ),
    );
  };

  return (
    <div className="flex h-full min-h-screen w-full flex-1 flex-col justify-between">
      <TicketHeader ticketDetails={ticketDetails} />
      <Conversation ticketDetails={ticketDetails} />
      <TextEditor onSend={addMessage} />
    </div>
  );
}

export default TicketConversation;
