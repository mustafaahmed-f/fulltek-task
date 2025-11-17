import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { pxToPercent } from "@/utils/pxToPercent";
import RightArrow from "@/icons/RightArrow";
import LeftArrow from "@/icons/LeftArrow";

export const AppLayout = () => {
  const [defaultSize, setDefaultSize] = useState(Math.floor(pxToPercent(260)));
  const [minSize, setMinSize] = useState(Math.floor(pxToPercent(84)));
  const [panelSize, setPanelSize] = useState(defaultSize);

  // toggle function
  const togglePanel = () => {
    setPanelSize((prev) => (prev === minSize ? defaultSize : minSize));
  };

  //* This allows responsiveness
  useEffect(() => {
    function handleResize() {
      setDefaultSize(Math.floor(pxToPercent(260)));
      setMinSize(Math.floor(pxToPercent(84)));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-full min-h-screen flex-row flex-nowrap bg-background bg-fulltek-background">
      <ResizablePanelGroup
        direction="horizontal"
        className="relative h-full w-full min-w-0 overflow-hidden"
      >
        <ResizablePanel
          defaultSize={panelSize}
          maxSize={defaultSize}
          minSize={minSize}
        >
          <SideBar />
        </ResizablePanel>
        <div className="relative">
          {/* The arrow button */}
          <button
            onClick={togglePanel}
            className="absolute right-[-12px] top-2/3 z-50 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-md transition hover:bg-gray-100"
          >
            {panelSize === minSize ? <RightArrow /> : <LeftArrow />}
          </button>
        </div>
        <ResizableHandle />
        <ResizablePanel className="h-full w-full min-w-0">
          <main className="h-full flex-1 overflow-auto">
            <Header />
            <Outlet />
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
