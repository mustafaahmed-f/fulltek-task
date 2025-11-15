interface MainLogoProps {
  className?: string;
}

function MainLogo({ className }: MainLogoProps) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M21.9732 0H16.0293V9.32501H21.9732V0Z" fill="#00CA7C" />
      <path
        d="M7.66488 3.46385L3.46191 7.66681L10.0557 14.2606L14.2586 10.0576L7.66488 3.46385Z"
        fill="#00CA7C"
      />
      <path d="M9.32499 16.0284H0V21.9723H9.32499V16.0284Z" fill="#00CA7C" />
      <path
        d="M10.0645 23.7376L3.4707 30.3314L7.67367 34.5343L14.2674 27.9406L10.0645 23.7376Z"
        fill="#00CA7C"
      />
      <path
        d="M37.101 16.0284H21.9693H16.0278V21.9723V28.6757H16.0254V38.0032H21.9693V37.104V28.6757V21.9723H28.6727H38.0001V16.0284H37.101Z"
        fill="#00CA7C"
      />
      <path
        d="M30.336 3.46458L23.7422 10.0583L27.9452 14.2613L34.5389 7.66755L30.336 3.46458Z"
        fill="#00CA7C"
      />
      <path
        d="M29.5946 25.3911L25.3916 29.5941L30.3378 34.5402L34.5407 30.3373L29.5946 25.3911Z"
        fill="#00CA7C"
      />
    </svg>
  );
}

export default MainLogo;
