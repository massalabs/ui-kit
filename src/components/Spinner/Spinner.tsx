// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  size?: number;
}

export function Spinner(props: SpinnerProps) {
  const { size = 24, ...rest } = props;

  return (
    <div data-testid="spinner" {...rest}>
      <ImSpinner2 size={size} className="animate-spin" />
    </div>
  );
}
