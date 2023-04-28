export function HelpCircle({ ...props }) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <path
        {...props}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"
      />
    </svg>
  );
}
