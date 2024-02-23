// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface SpinnerProps {
  variant?: 'button';
  customClass?: string;
}

export function Spinner(props: SpinnerProps) {
  const { variant = 'default', customClass = '' } = props;

  const gradientColorClass =
    variant === 'button'
      ? 'bg-gradient-to-tr from-neutral via-primary to-primary'
      : 'bg-gradient-to-tr from-primary via-neutral to-neutral';

  return (
    <div
      data-testid="spinner"
      className={`animate-spin flex items-center justify-center rounded-full w-6 h-6
    ${gradientColorClass} ${customClass}`}
    >
      <div className="w-5 h-5 rounded-full bg-c-disabled-1" />
    </div>
  );
}

interface ISpinnerProps {
  customClass?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SpinnerSized(props: ISpinnerProps) {
  const { customClass = '', size = 'sm' } = props;

  const isSmall = size === 'sm';
  const isMedium = size === 'md';
  const sizeClass = isSmall
    ? 'w-6 h-6'
    : isMedium
    ? 'w-8 h-8'
    : 'w-12 h-12 border-4';

  return (
    <div
      className={`animate-spin ${sizeClass} rounded-full border-2 border-t-transparent
        border-neutral ${customClass}`}
    />
  );
}
