interface SearchIconProps {
  className?: string;
}

function SearchIcon({ className }: SearchIconProps) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.22802 13.3996C10.8057 13.3996 13.706 10.5679 13.706 7.07479C13.706 3.5817 10.8057 0.75 7.22802 0.75C3.65031 0.75 0.75 3.5817 0.75 7.07479C0.75 10.5679 3.65031 13.3996 7.22802 13.3996Z"
        stroke="#7A8699"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3257 14.9808L11.8438 11.5812"
        stroke="#7A8699"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
