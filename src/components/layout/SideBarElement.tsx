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
        "flex flex-col gap-1 items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-[#00CA7C0D]",
        isActive && "bg-[#00CA7C0D]",
        className
      )}
    >
      {children}
      <span className="text-sm text-center ">{title}</span>
    </div>
  );
}

export default SideBarElement;
