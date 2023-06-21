// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface SpinerProps {
  size?: number;
  customClass?: string;
}

export function Spinner(props: SpinerProps) {
  const { customClass } = props;

  return (
    <div
      data-testid="spinner"
      className={`animate-spin flex items-center justify-center rounded-full w-6 h-6
      bg-gradient-to-tr from-primary via-neutral to-neutral ${customClass}`}
    >
      <div className={`w-5 h-5 rounded-full bg-primary`} />
    </div>
  );
}
