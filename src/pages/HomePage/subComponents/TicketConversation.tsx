import { useTranslation } from "react-i18next";
import { tickets } from "../utils/TicketsArray";
import { CirclePlay, PlayIcon } from "lucide-react";
import CheckIcon from "@/icons/CheckIcon";
import ExpandIcon from "@/icons/ExpandIcon";
import ThreeDotsIcon from "@/icons/ThreeDotsIcon";
import Conversation from "./Conversation";
import TextEditor from "./TextEditor";

interface TicketConversationProps {
  activeTicket: number;
}

function TicketConversation({ activeTicket }: TicketConversationProps) {
  const { t } = useTranslation();
  const ticketDetails = tickets.find(
    (ticket) => ticket.id === String(activeTicket),
  );

  return (
    <div className="h-full flex-1">
      <div className="mb-3 flex flex-col items-center p-3 max-sm:gap-y-3 sm:flex-row sm:justify-between sm:p-5">
        <p className="text-lg font-semibold">{t(ticketDetails?.title)}</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <div className="flex items-center gap-2">
            <p>00:00:00</p>
            <CirclePlay color="#7A8699" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex cursor-pointer items-center gap-1 rounded-lg border-2 border-[#7A8699] p-2">
              <CheckIcon />
              <p>{t("ToChangeMission")}</p>
            </div>
            <div className="cursor-pointer rounded-lg border-2 border-[#7A8699] p-3">
              <ExpandIcon />
            </div>
            <div className="cursor-pointer rounded-lg border-2 border-[#7A8699] p-3">
              <ThreeDotsIcon />
            </div>
          </div>
        </div>
      </div>
      <Conversation />
      <TextEditor />
    </div>
  );
}

export default TicketConversation;
