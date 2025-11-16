import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";

export const AppLayout = () => {
  const pxToPercent = (px: number) => (px / window.innerWidth) * 100;
  console.log(Math.floor(pxToPercent(84)));
  return (
    <div className="min-h-screen h-full flex flex-row flex-nowrap bg-background bg-fulltek-background">
      <ResizablePanelGroup direction="horizontal" className="w-full">
        <ResizablePanel defaultSize={17} maxSize={17} minSize={5}>
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
