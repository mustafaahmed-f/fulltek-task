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
    <div
      className={`flex flex-row py-6 relative min-w-[86px] ${
        i18n.language === "ar"
          ? "border-l-2 border-l-fulltek-sidebar-border"
          : "border-r-2 border-r-fulltek-sidebar-border"
      } `}
    >
      {/* //* Main SideBar */}
      <div className="w-[86px] h-full flex flex-col items-center gap-2 px-6 min-h-screen">
        <SideBarElement title="" className="">
          <MainLogo />
        </SideBarElement>
        <div className="flex flex-col items-center gap-2">
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
        <div className="rounded-full border-[3px] border-fulltek-primary overflow-hidden w-12 h-12 flex justify-center">
          <img
            src="../../../public/Man 1.png"
            alt="Man1"
            className="object-cover rounded"
          />
        </div>
      </div>
      {/* //* details section */}
      <div className="max-w-[174px]">
        <div
          className={`py-2  border-b-2 border-b-fulltek-sidebar-border ${
            i18n.language === "ar" ? "pr-4 pl-24" : "pl-4 pr-20"
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
        <div className="py-2 px-4 bg-fulltek-sidebar-background w-full">
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
