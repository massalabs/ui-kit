// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { ComponentPropsWithoutRef } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  enableBorder?: boolean;
  bgColor?: string;
  customClass?: string;
}

export function Card({
  bgColor = 'bg-secondary',
  enableBorder = false,
  customClass = '',
  children,
  ...rest
}: CardProps) {
  const borderClass = enableBorder ? 'border border-tertiary' : 'border-none';
  return (
    <div
      data-testid="card"
      className={`${bgColor} ${borderClass} w-full h-fit text-f-primary rounded-lg p-4 ${customClass}`}
      {...rest}
    >
      {children}
    </div>
  );
}
