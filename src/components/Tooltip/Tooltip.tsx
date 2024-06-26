// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ReactNode } from 'react';
import { ComponentPropsWithoutRef, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

export interface TooltipProps extends ComponentPropsWithoutRef<'div'> {
  customIconColor?: string;
  customClass?: string;
  body: ReactNode | string;
}

export function Tooltip(props: TooltipProps) {
  const {
    body,
    children,
    customIconColor: customColor,
    customClass = '',
    ...rest
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);

  const defaultIcon = (
    <FiHelpCircle className={customColor || 'text-neutral'} />
  );

  return (
    <div
      data-testid="Tooltip"
      className="w-fit hover:cursor-pointer"
      {...rest}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children || defaultIcon}
      {showTooltip && (
        <div
          className={`w-fit z-10 absolute bg-tertiary rounded-lg text-neutral 
          ml-2 px-2 py-1 mas-caption ${customClass}`}
        >
          {body}
        </div>
      )}
    </div>
  );
}
