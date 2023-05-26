// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode, ComponentPropsWithoutRef } from 'react';

export interface AccountSelectorProps extends ComponentPropsWithoutRef<'div'> {
  avatar: JSX.Element;
  accountName: string;
  icon: JSX.Element;
  amount: string;
  children?: ReactNode;
}

export function AccountSelector(props: AccountSelectorProps) {
  let { avatar, accountName, icon, amount, children, ...rest } = props;

  const containerFlexClass = 'flex justify-center items-center';

  return (
    <div
      data-testid="account-selector-button"
      className={`bg-primary text-f-primary h-14 w-full p-3 rounded-lg mas-menu-active cursor-pointer 
                  flex flex-row items-center justify-between
                  hover:bg-tertiary
                  active:bg-secondary`}
      {...rest}
    >
      <div className={`${containerFlexClass}`}>
        <div
          className={`bg-neutral h-8 w-8 rounded-full mr-2 ${containerFlexClass}`}
        >
          {avatar}
        </div>
        <div>{accountName}</div>
      </div>
      <div className={`${containerFlexClass}`}>
        <div className={`mr-2 rounded-full ${containerFlexClass}`}>{icon}</div>
        <div>{amount}</div>
      </div>
    </div>
  );
}
