import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

export const AppLayout = () => {
  const pxToPercent = (px: number) => (px / window.innerWidth) * 100;
  const [defaultSize, setDefaultSize] = useState(Math.floor(pxToPercent(260)));
  const [minSize, setMinSize] = useState(Math.floor(pxToPercent(84)));

  // const defaultSize = Math.floor(pxToPercent(260));

  // const minSize = Math.floor(pxToPercent(84));

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
    <div className="min-h-screen h-full flex flex-row flex-nowrap bg-background bg-fulltek-background">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full min-w-0 overflow-hidden"
      >
        <ResizablePanel
          defaultSize={defaultSize}
          maxSize={defaultSize}
          minSize={minSize}
        >
          <SideBar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="w-full h-full min-w-0">
          <main className="flex-1 h-full overflow-auto">
            <Header />
            <Outlet />
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
