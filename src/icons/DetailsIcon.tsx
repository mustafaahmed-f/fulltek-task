interface DetailsIconProps {
  className?: string;
}

function DetailsIcon({ className }: DetailsIconProps) {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.60938 0.5V3.3C7.60938 3.6713 7.75918 4.0274 8.02583 4.28995C8.29249 4.5525 8.65415 4.7 9.03125 4.7H11.875M3.34375 8.2H4.76562M7.60938 8.2H9.03125M3.34375 11H4.76562M7.60938 11H9.03125M8.32031 0.5H1.92187C1.54477 0.5 1.18311 0.6475 0.916457 0.91005C0.649804 1.1726 0.5 1.5287 0.5 1.9V13.1C0.5 13.4713 0.649804 13.8274 0.916457 14.0899C1.18311 14.3525 1.54477 14.5 1.92187 14.5H10.4531C10.8302 14.5 11.1919 14.3525 11.4585 14.0899C11.7252 13.8274 11.875 13.4713 11.875 13.1V4L8.32031 0.5Z"
        stroke="#98A2B2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DetailsIcon;
