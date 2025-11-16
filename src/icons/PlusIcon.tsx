interface PlusIconProps {
  className?: string;
}

function PlusIcon({ className }: PlusIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.84752 16.562C13.3197 16.562 16.945 13.0223 16.945 8.65599C16.945 4.28963 13.3197 0.75 8.84752 0.75C4.37538 0.75 0.75 4.28963 0.75 8.65599C0.75 13.0223 4.37538 16.562 8.84752 16.562Z"
        stroke="#7A8699"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.60938 8.65576H12.0874"
        stroke="#7A8699"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.84766 5.49359V11.8184"
        stroke="#7A8699"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PlusIcon;
