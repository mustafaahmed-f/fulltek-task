import { useEffect, useState } from "react";
import TicketConversation from "./TicketConversation";
import TicketDetailsSection from "./TicketDetailsSection";
import { pxToPercent } from "@/utils/pxToPercent";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import RightArrow from "@/icons/RightArrow";
import LeftArrow from "@/icons/LeftArrow";

interface MainSectionProps {
  activeTicket: number;
}

function MainSection({ activeTicket }: MainSectionProps) {
  const [defaultSize, setDefaultSize] = useState(Math.floor(pxToPercent(380)));
  const [minSize, setMinSize] = useState(Math.floor(pxToPercent(92)));
  const [panelSize, setPanelSize] = useState(defaultSize);

  // toggle function
  const togglePanel = () => {
    setPanelSize((prev) => (prev === minSize ? defaultSize : minSize));
  };

  //* This allows responsiveness
  useEffect(() => {
    function handleResize() {
      setDefaultSize(Math.floor(pxToPercent(380)));
      setMinSize(Math.floor(pxToPercent(92)));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="relative h-full w-full min-w-0 overflow-hidden"
      >
        <ResizablePanel className="h-full w-full min-w-0">
          <TicketConversation />
        </ResizablePanel>

        <ResizableHandle />
        <div className="relative">
          {/* The arrow button */}
          <button
            onClick={togglePanel}
            className="/* Move slightly outside the handle */ absolute right-[-12px] top-24 z-50 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-md transition hover:bg-gray-100"
          >
            {panelSize === minSize ? <RightArrow /> : <LeftArrow />}
          </button>
        </div>

        <ResizablePanel
          defaultSize={panelSize}
          maxSize={defaultSize}
          minSize={minSize}
        >
          <TicketDetailsSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MainSection;
