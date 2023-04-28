export function ArrowUpRight({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7M7 7h10v10"
      />
    </svg>
  );
}
