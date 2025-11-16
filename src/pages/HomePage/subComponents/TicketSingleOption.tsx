import { cn } from "@/lib/utils";

interface TicketSingleOptionProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
  isActive?: boolean;
}

function TicketSingleOption({
  children,
  title,
  className,
  isActive,
}: TicketSingleOptionProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-lg px-2 py-2 hover:bg-[#00CA7C0D]",
        isActive
          ? "bg-[#00CA7C0D] text-[#29304C]"
          : "bg-transparent text-fulltek-text-grey",
        className,
      )}
    >
      {children}
      <span className="text-center text-sm">{title}</span>
    </div>
  );
}

export default TicketSingleOption;
