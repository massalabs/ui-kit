export function Edit({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 3a2.827 2.827 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      />
    </svg>
  );
}
