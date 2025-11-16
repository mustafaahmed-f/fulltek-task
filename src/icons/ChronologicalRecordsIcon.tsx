interface ChronologicalRecordsIconProps {
  className?: string;
  isActive?: boolean;
}

function ChronologicalRecordsIcon({
  className,
  isActive,
}: ChronologicalRecordsIconProps) {
  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 15.5V0.5L7.5 4.25L0.5 8"
        stroke={isActive ? "#00CA7C" : "#98A2B2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChronologicalRecordsIcon;
