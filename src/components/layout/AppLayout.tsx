import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-row flex-nowrap bg-background bg-fulltek-background">
      <SideBar />
      <main className="flex-1">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
