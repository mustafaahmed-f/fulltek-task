import { headerHeightAtom } from "@/atoms/LayoutAtoms";
import DocumentIcon from "@/icons/DocumentIcon";
import NotificationsIcon from "@/icons/NotificationsIcon";
import PlusIcon from "@/icons/PlusIcon";
import SearchIcon from "@/icons/SearchIcon";
import TimerIcon from "@/icons/TimerIcon";
import { useAtom } from "jotai";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const { t, i18n } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useAtom(headerHeightAtom);

  if (headerRef.current) {
    setHeaderHeight(headerRef.current.clientHeight);
  }

  return (
    <div
      ref={headerRef}
      className="flex flex-col items-center justify-between border-b-2 border-b-fulltek-sidebar-border px-4 pb-2 pt-5 text-lg font-semibold max-sm:gap-y-3 sm:flex-row sm:px-6 sm:pt-5"
    >
      <div>{t("Orders")}</div>
      <div className="flex items-center gap-4">
        <SearchIcon className="cursor-pointer" />
        <DocumentIcon className="cursor-pointer" />
        <TimerIcon className="cursor-pointer" />
        <PlusIcon className="cursor-pointer" />
        <div className="relative cursor-pointer">
          <NotificationsIcon />
          <div
            className={`absolute top-0 z-10 -translate-y-3 ${
              i18n.language === "ar"
                ? "right-0 translate-x-2"
                : "left-0 -translate-x-2"
            } rounded-md bg-fulltek-primary px-1 py-0.5 text-xs text-white`}
          >
            6
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
