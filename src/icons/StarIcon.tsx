interface StarIconProps {}

function StarIcon({}: StarIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.80892 1.26411C7.01929 0.411963 8.23071 0.411962 8.44108 1.26411L9.41721 5.21818C9.49203 5.5213 9.7287 5.75797 10.0318 5.83279L13.9859 6.80892C14.838 7.01929 14.838 8.23071 13.9859 8.44108L10.0318 9.41721C9.7287 9.49203 9.49203 9.7287 9.41721 10.0318L8.44108 13.9859C8.23071 14.838 7.01929 14.838 6.80892 13.9859L5.83279 10.0318C5.75797 9.7287 5.5213 9.49203 5.21818 9.41721L1.26411 8.44108C0.411963 8.23071 0.411962 7.01929 1.26411 6.80892L5.21818 5.83279C5.5213 5.75797 5.75797 5.5213 5.83279 5.21818L6.80892 1.26411Z"
        stroke="url(#paint0_linear_1_19023)"
        stroke-width="1.25"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_19023"
          x1="3.125"
          y1="3.625"
          x2="9.38435"
          y2="12.3708"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E366FF" />
          <stop offset="1" stop-color="#7A52FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default StarIcon;
