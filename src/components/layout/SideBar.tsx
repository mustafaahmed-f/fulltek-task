import MainLogo from "@/icons/MainLogo";
import SideBarElement from "./SideBarElement";
import { useTranslation } from "react-i18next";
import Board from "@/icons/Board";
import Customers from "@/icons/Customers";
import Orders from "@/icons/Orders";
import Settings from "@/icons/Settings";
import Calender from "@/icons/Calender";
import Finance from "@/icons/Finance";
import Projects from "@/icons/Projects";
import HR from "@/icons/HR";
import Contracts from "@/icons/Contracts";
import ImgVector from "@/icons/ImgVector";

interface SideBarProps {}

function SideBar({}: SideBarProps) {
  const { t, i18n } = useTranslation();
  console.log("Current language : ", i18n.language);
  return (
    <div
      className={`flex flex-row py-6  ${
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
      {/* //* resizable section */}
      <div className="h-full w-[174px]">
        <div className="py-2 px-4 border-b-2 border-b-fulltek-sidebar-border">
          <p
            className={`w-full text-lg font-semibold ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("Orders")}
          </p>
        </div>
        <div className="py-2 px-4 bg-fulltek-sidebar-background">
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
