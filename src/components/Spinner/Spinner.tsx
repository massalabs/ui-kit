// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface SpinnerProps {
  customClass?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function Spinner(props: SpinnerProps) {
  const { customClass = '', size = 'sm', color = 'neutral' } = props;

  const isSmall = size === 'sm';
  const isMedium = size === 'md';
  const sizeClass = isSmall
    ? 'w-6 h-6'
    : isMedium
    ? 'w-8 h-8'
    : 'w-12 h-12 border-4';

  return (
    <div
      data-testid="spinner"
      className={`animate-spin ${sizeClass} rounded-full border-2 border-t-transparent
        border-${color} ${customClass}`}
    />
  );
}
