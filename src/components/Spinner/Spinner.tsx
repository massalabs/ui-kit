// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface SpinerProps {
  variant?: 'button';
  customClass?: string;
}

export function Spinner(props: SpinerProps) {
  const { variant = 'default', customClass } = props;

  const gradientColorClass =
    variant === 'button'
      ? 'bg-gradient-to-tr from-neutral via-primary to-primary'
      : 'bg-gradient-to-tr from-primary via-neutral to-neutral';

  const bgColorClass = variant === 'button' ? 'bg-neutral' : 'bg-primary';

  return (
    <div
      data-testid="spinner"
      className={`animate-spin flex items-center justify-center rounded-full w-6 h-6
      ${gradientColorClass} ${customClass}`}
    >
      <div className={`w-5 h-5 rounded-full ${bgColorClass}`} />
    </div>
  );
}
