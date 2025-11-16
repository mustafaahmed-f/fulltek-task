import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SingleTabProps {
  isActive?: boolean;
  id: string;
  title: string;
  orderNumber: number;
  setActiveTicket?: React.Dispatch<React.SetStateAction<number>>;
}

function SingleTab({
  isActive,
  id,
  title,
  orderNumber,
  setActiveTicket,
}: SingleTabProps) {
  const { t, i18n } = useTranslation();
  function handleSetActiveTicket() {
    if (setActiveTicket) {
      setActiveTicket(Number(id));
    }
  }
  return (
    <div
      className={`flex max-w-[216px] cursor-pointer items-center justify-between gap-1 border-b-2 px-4 py-3 font-semibold ${
        i18n.language === "ar"
          ? "border-l-2 border-l-fulltek-sidebar-border"
          : "border-r-2 border-r-fulltek-sidebar-border"
      } ${isActive ? "border-b-white" : "border-b-fulltek-sidebar-border"}`}
      onClick={handleSetActiveTicket}
    >
      <div className="flex flex-col items-start">
        <div
          className={`max-w-[164px] overflow-hidden text-ellipsis whitespace-nowrap text-nowrap font-semibold ${
            isActive ? "text-black" : "text-fulltek-text-grey"
          }`}
        >
          {t(title)}
        </div>
        <p className="text-xs text-fulltek-text-grey">
          {t("OrderNumber")} : <span>{orderNumber}</span>
        </p>
      </div>
      <span className="cursor-pointer hover:text-fulltek-primary">
        <X size={16} />
      </span>
    </div>
  );
}

export default SingleTab;
