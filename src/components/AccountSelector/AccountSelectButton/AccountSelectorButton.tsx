import { ReactNode, ComponentPropsWithoutRef } from "react";

export interface AccountSelectorProps extends ComponentPropsWithoutRef<"div"> {
  avatar: ReactNode;
  accountName: string;
  icon: ReactNode;
  amount: string;
  children?: ReactNode;
}

export function AccountSelectorButton(props: AccountSelectorProps) {
  let { avatar, accountName, icon, amount, children, ...rest } = props;

  const accountSelectorClass = "flex flex-row items-center justify-between";

  const hoverClass = `hover:bg-info`;
  const activeClass = `active:bg-c-pressed`;

  const containerFlexClass = "flex justify-center items-center";

  return (
    <div
      className={`bg-neutral text-primary h-14 w-full p-3 rounded-lg mas-menu-active cursor-pointer 
                      ${accountSelectorClass} 
                      ${hoverClass} 
                      ${activeClass}`}
      {...rest}
      data-testid="account-selector-button"
    >
      <div className={`${containerFlexClass}`}>
        <div
          className={`bg-primary h-8 w-8 rounded-full mr-2 ${containerFlexClass}`}
        >
          {avatar}
        </div>
        <div>{accountName}</div>
      </div>

      <div className={`${containerFlexClass}`}>
        <div
          className={`mr-2 bg-primary h-6 w-6 rounded-full
                          ${containerFlexClass}`}
        >
          {icon}
        </div>
        <div>{amount}</div>
      </div>
    </div>
  );
}
