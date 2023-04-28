export function ChevronUp({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 15l-6-6-6 6"
      />
    </svg>
  );
}
