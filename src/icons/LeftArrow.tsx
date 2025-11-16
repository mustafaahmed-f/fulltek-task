interface LeftArrowProps {}

function LeftArrow({}: LeftArrowProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E2E8F0" />
      <path d="M14.34 6.75L9.75 11.7573L14.49 16.92" fill="white" />
      <path
        d="M14.34 6.75L9.75 11.7573L14.49 16.92"
        stroke="#475370"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

export default LeftArrow;
