// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';
import { ImSpinner2 } from 'react-icons/im';

interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
  customClass?: string;
  size?: number;
}

export function Spinner(props: SpinnerProps) {
  const { size = 24, customClass = '', ...rest } = props;

  return (
    <div data-testid="spinner" className={customClass} {...rest}>
      <ImSpinner2 size={size} className="animate-spin" />
    </div>
  );
}
