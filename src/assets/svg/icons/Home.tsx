export function Home({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 22V12h6v10"
      />
    </svg>
  );
}
