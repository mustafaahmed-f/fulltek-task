interface AddNoteProps {}

function AddNote({}: AddNoteProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="14" fill="#FFF0D8" />
      <path
        d="M11.5 8V10.5M14 8V10.5M16.5 8V10.5M11.5 13H15.25M11.5 15.5H16.5M11.5 18H14.625M10.25 9.25H17.75C18.4404 9.25 19 9.80964 19 10.5V19.25C19 19.9404 18.4404 20.5 17.75 20.5H10.25C9.55964 20.5 9 19.9404 9 19.25V10.5C9 9.80964 9.55964 9.25 10.25 9.25Z"
        stroke="#FFA43D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddNote;
