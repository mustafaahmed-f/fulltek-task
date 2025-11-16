import DocumentIcon from "@/icons/DocumentIcon";
import NotificationsIcon from "@/icons/NotificationsIcon";
import PlusIcon from "@/icons/PlusIcon";
import SearchIcon from "@/icons/SearchIcon";
import TimerIcon from "@/icons/TimerIcon";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="sm:pt-8 pt-5 pb-2 px-4 max-sm:gap-y-3 sm:px-6 font-semibold text-lg border-b-2 border-b-fulltek-sidebar-border flex sm:flex-row flex-col justify-between items-center">
      <div>{t("Orders")}</div>
      <div className="flex items-center gap-4">
        <SearchIcon className="cursor-pointer" />
        <DocumentIcon className="cursor-pointer" />
        <TimerIcon className="cursor-pointer" />
        <PlusIcon className="cursor-pointer" />
        <div className="relative cursor-pointer">
          <NotificationsIcon />
          <div
            className={`z-10 absolute top-0 -translate-y-3 ${
              i18n.language === "ar"
                ? "right-0 translate-x-2"
                : "left-0 -translate-x-2"
            } bg-fulltek-primary text-white rounded-md text-xs px-1 py-0.5`}
          >
            6
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
