export function X({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 6L6 18M6 6l12 12"
      />
    </svg>
  );
}
