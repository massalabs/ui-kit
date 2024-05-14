// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';

export const tagTypes = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  type: string;
  children: React.ReactNode;
  customClass?: string;
}

export function Tag(props: TagProps) {
  const { children, type, customClass = '', ...rest } = props;

  let isDefault = type === 'default';
  let isInfo = type === 'info';

  let typeColor = isDefault
    ? 'text-f-primary'
    : isInfo
    ? 'text-s-info-1'
    : `text-s-${type}`;
  let backgroundClass = isInfo
    ? 'bg-s-info-1'
    : isDefault
    ? 'bg-white/30'
    : `bg-s-${type}`;

  return (
    <div
      data-testid="tag"
      className={`${backgroundClass} mas-caption rounded-full w-fit px-3 py-1
        bg-opacity-30 ${typeColor} ${customClass}`}
      {...rest}
    >
      {children}
    </div>
  );
}
