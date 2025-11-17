import Board from "@/icons/Board";
import Calender from "@/icons/Calender";
import Contracts from "@/icons/Contracts";
import Customers from "@/icons/Customers";
import Finance from "@/icons/Finance";
import HR from "@/icons/HR";
import MainLogo from "@/icons/MainLogo";
import Orders from "@/icons/Orders";
import Projects from "@/icons/Projects";
import Settings from "@/icons/Settings";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SideBarElement from "./SideBarElement";

interface SideBarProps {}

function SideBar({}: SideBarProps) {
  const defaultSize = 174;
  const [isCollased, setIsCollased] = useState(false);
  const { t, i18n } = useTranslation();
  const panelRef = useRef<any>(null);

  const toggleSidebar = () => {
    if (!panelRef.current) return;

    if (isCollased) {
      panelRef.current.resize(30); // expand to defaultSize percent
      setIsCollased(false);
    } else {
      panelRef.current.collapse(); // built-in collapse
      setIsCollased(true);
    }
  };

  return (
    <div className={`flex h-full min-w-[86px] flex-row py-3`}>
      {/* //* Main SideBar */}
      <div className="flex w-[86px] flex-col items-center px-6 scrollbar-hide">
        <SideBarElement title="" className="">
          <MainLogo />
        </SideBarElement>
        <div className="flex flex-col items-center gap-1">
          <SideBarElement title={t("Board")}>
            <Board />
          </SideBarElement>
          <SideBarElement title={t("Customers")}>
            <Customers />
          </SideBarElement>
          <SideBarElement title={t("Contracts")}>
            <Contracts />
          </SideBarElement>
          <SideBarElement title={t("HR")}>
            <HR />
          </SideBarElement>
          <SideBarElement title={t("Projects")}>
            <Projects />
          </SideBarElement>
          <SideBarElement title={t("Finance")}>
            <Finance />
          </SideBarElement>
          <SideBarElement title={t("Calender")}>
            <Calender />
          </SideBarElement>
          <SideBarElement title={t("Orders")} isActive>
            <Orders isActive />
          </SideBarElement>
          <SideBarElement title={t("Settings")}>
            <Settings />
          </SideBarElement>
        </div>
        {/* <ImgVector /> */}
        <div className="flex h-12 w-12 justify-center overflow-hidden rounded-full border-[3px] border-fulltek-primary">
          <img src="./Man 1.png" alt="Man1" className="rounded object-cover" />
        </div>
      </div>
      {/* //* details section */}
      <div className="max-w-[174px]">
        <div
          className={`border-b-2 border-b-fulltek-sidebar-border py-2 ${
            i18n.language === "ar" ? "pl-24 pr-4" : "pl-4 pr-24"
          }`}
        >
          <p
            className={`w-full text-lg font-semibold ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("Orders")}
          </p>
        </div>
        <div className="w-full bg-fulltek-sidebar-background px-4 py-2">
          <p
            className={`w-full text-sm ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("Orders")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
