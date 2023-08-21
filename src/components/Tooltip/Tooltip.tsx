// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ReactNode } from 'react';
import { ComponentPropsWithoutRef, cloneElement, useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

export interface TooltipProps extends ComponentPropsWithoutRef<'div'> {
  icon?: ReactNode;
}

export function Tooltip({ ...props }) {
  const { content, icon, customClass, ...rest } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const baseIcon = icon || <FiHelpCircle />;
  const clonedIcon = cloneElement(baseIcon, {
    className: 'stroke-current text-neutral',
  });
  return (
    <div
      data-testid="Tooltip"
      className="w-fit p-2 hover:cursor-pointer"
      {...rest}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {clonedIcon}
      {showTooltip && (
        <div
          className={`w-fit z-10 absolute bg-tertiary p-3 rounded-lg text-neutral ml-2 ${customClass} `}
        >
          {content}
        </div>
      )}
    </div>
  );
}
