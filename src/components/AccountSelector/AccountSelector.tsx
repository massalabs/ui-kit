// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef, cloneElement } from 'react';

export interface AccountSelectorProps extends ComponentPropsWithoutRef<'div'> {
  avatar: JSX.Element;
  accountName: string;
  icon: JSX.Element;
  amount: string;
  customClass?: string;
  variant?: 'secondary' | undefined;
  children?: ReactNode;
}

export function AccountSelector(props: AccountSelectorProps) {
  let {
    avatar,
    accountName,
    icon,
    amount,
    variant,
    children,
    customClass,
    ...rest
  } = props;

  const containerClass = 'flex justify-center items-center';
  const primaryClass = `bg-c-default text-primary
                        hover:bg-c-hover hover:border-c-hover
                        active:bg-c-hover 
                        disabled:text-f-disabled-2 disabled:bg-c-disabled-1 disabled:border-c-disabled-1`;
  const secondaryClass = `text-f-primary
                          hover:bg-neutral/[.15]
                          active:bg-neutral/[.3]                                                  
                          disabled:text-f-disabled-1 disabled:bg-c-disabled-2 disabled:border-c-disabled-1`;

  const primaryAvatarClass = 'bg-primary text-f-primary';
  const secondaryAvatarClass = 'bg-neutral text-f-secondary';

  const selectorClass = variant ? secondaryClass : primaryClass;
  const avatarClass = variant ? secondaryAvatarClass : primaryAvatarClass;

  const clonedAvatar = avatar
    ? cloneElement(avatar, {
        className: `${avatarClass} rounded-full p-1 h-8 w-8 mr-2`,
      })
    : null;

  return (
    <div
      data-testid="account-selector-button"
      className={`h-14 w-full p-3 rounded-lg mas-menu-active cursor-pointer 
                  flex flex-row items-center justify-between
                  ${containerClass}
                  ${selectorClass}
                  ${customClass}`}
      {...rest}
    >
      <div className={`${containerClass}`}>
        {clonedAvatar}
        {accountName}
      </div>
      <div className={`${containerClass} gap-2`}>
        {icon}
        {amount}
      </div>
    </div>
  );
}
