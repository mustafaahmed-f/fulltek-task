interface PlayIconProps {}

function PlayIcon({}: PlayIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4688 22.4C17.2126 22.4 21.8688 17.7438 21.8688 12C21.8688 6.25624 17.2126 1.60001 11.4688 1.60001C5.72509 1.60001 1.06885 6.25624 1.06885 12C1.06885 17.7438 5.72509 22.4 11.4688 22.4Z"
        stroke="#7A8699"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.28125 8L15.6813 12L9.28125 16V8Z" fill="#7A8699" />
    </svg>
  );
}

export default PlayIcon;
