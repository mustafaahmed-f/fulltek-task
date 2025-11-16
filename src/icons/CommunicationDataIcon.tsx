interface CommunicationDataIconProps {
  className?: string;
}

function CommunicationDataIcon({ className }: CommunicationDataIconProps) {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.6111 0.5V2.1M12.1006 16.5C12.1006 15.227 11.6089 14.0061 10.7337 13.1059C9.85855 12.2057 8.67157 11.7 7.43389 11.7C6.19621 11.7 5.00923 12.2057 4.13406 13.1059C3.25889 14.0061 2.76722 15.227 2.76722 16.5M4.38889 0.5V2.1M10.6111 8.5C10.6111 10.2673 9.21822 11.7 7.5 11.7C5.78178 11.7 4.38889 10.2673 4.38889 8.5C4.38889 6.73269 5.78178 5.3 7.5 5.3C9.21822 5.3 10.6111 6.73269 10.6111 8.5ZM2.05556 2.1H12.9444C13.8036 2.1 14.5 2.81634 14.5 3.7V14.9C14.5 15.7837 13.8036 16.5 12.9444 16.5H2.05556C1.19645 16.5 0.5 15.7837 0.5 14.9V3.7C0.5 2.81634 1.19645 2.1 2.05556 2.1Z"
        stroke="#98A2B2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CommunicationDataIcon;
