export function Sun({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <g
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#clip0_536_9079)"
      >
        <path
          d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 
      1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        />
      </g>
      <defs>
        <clipPath id="clip0_536_9079">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
