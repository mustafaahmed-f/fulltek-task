import { cn } from "@/lib/utils";

interface SideBarElementProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
  isActive?: boolean;
}

function SideBarElement({
  children,
  title,
  className,
  isActive = false,
}: SideBarElementProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col items-center gap-1 rounded-lg px-2 py-2 hover:bg-[#00CA7C0D]",
        isActive && "bg-[#00CA7C0D]",
        className,
      )}
    >
      {children}
      <span className="text-center text-sm">{title}</span>
    </div>
  );
}

export default SideBarElement;
