import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SingleRecordProps {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  time: string;
  timeType: string;
  icon: any;
  isLast?: boolean;
}

function SingleRecord({
  id,
  title,
  description,
  author,
  date,
  time,
  timeType,
  icon,
  isLast,
}: SingleRecordProps) {
  const { t } = useTranslation();
  const Icon = icon;
  return (
    <div className="flex items-start gap-2">
      <div className="flex h-full flex-col items-center gap-0">
        <Icon />
        {!isLast && <div className="h-full min-h-[80px] w-0.5 bg-[#D8E8FF]" />}
        <ArrowDown size={12} color="#D8E8FF" className="font-semibold" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">{t(title)}</p>
          <div className="flex gap-2 text-xs text-[#7A8699]">
            <p>{date}</p>
            <p>
              {time} {t(timeType)}
            </p>
          </div>
        </div>
        <div className="text-xs">
          <span>قام</span>
          <span>@{author} </span>
          <p className="inline">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleRecord;
