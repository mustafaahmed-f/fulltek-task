import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import Header from "./Header";
import SideBar from "./SideBar";

export const AppLayout = () => {
  const pxToPercent = (px: number) => (px / window.innerWidth) * 100;

  const defaultSize = Math.floor(pxToPercent(260));

  const minSize = Math.floor(pxToPercent(84));

  return (
    <div className="min-h-screen h-full flex flex-row flex-nowrap bg-background bg-fulltek-background">
      <ResizablePanelGroup direction="horizontal" className="w-full">
        <ResizablePanel
          defaultSize={defaultSize}
          maxSize={defaultSize}
          minSize={minSize}
        >
          <SideBar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <main className="flex-1">
            <Header />
            <Outlet />
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
