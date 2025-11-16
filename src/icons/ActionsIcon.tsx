interface ActionsIconProps {
  className?: string;
}

function ActionsIcon({ className }: ActionsIconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.3 0.5L14.9 4.05556M14.9 4.05556L11.3 7.61111M14.9 4.05556H0.5M4.1 16.5L0.5 12.9444M0.5 12.9444L4.1 9.38889M0.5 12.9444L14.9 12.9444"
        stroke="#98A2B2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ActionsIcon;
