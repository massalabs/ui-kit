export function ArrowLeft({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12H5M12 19l-7-7 7-7"
      />
    </svg>
  );
}
