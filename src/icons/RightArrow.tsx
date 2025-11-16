interface RightArrowProps {}

function RightArrow({}: RightArrowProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.5"
        transform="matrix(-1 0 0 1 24 0)"
        fill="white"
        stroke="#E2E8F0"
      />
      <path d="M9.66 6.75L14.25 11.7573L9.50999 16.92" fill="white" />
      <path
        d="M9.66 6.75L14.25 11.7573L9.50999 16.92"
        stroke="#475370"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

export default RightArrow;
