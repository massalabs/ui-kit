import { ComponentPropsWithoutRef } from "react";

export interface AccountSelectorProps extends ComponentPropsWithoutRef<"div"> {
  theme?: string;
  profileimage: React.ReactNode;
  accountname: string;
  svg: React.ReactNode;
  accountbalance: string;
  children?: React.ReactNode;
}

export function AccountSelectorButton(props: AccountSelectorProps) {
  // Specific classes for the account selector button
  const accountSelectorClass = "flex flex-row items-center justify-between";

  const hoverClass = `hover:bg-info`;
  const activeClass = `active:bg-cHover`;

  // Generic classes
  const genericFlex = "flex justify-center items-center";

  const tokenDimensionClass = `h-6 w-6`;

  return (
    // Take more time to think about correct code structure
    // Check grid
    <div
      className={` bg-neutral text-primary h-[56px] w-full p-3 rounded-lg mas-menu-active cursor-pointer 
                      ${accountSelectorClass} 
                      ${hoverClass} 
                      ${activeClass}`}
      {...props}
      data-testid="account-selector-button"
    >
      <div className={`${genericFlex}`}>
        <div
          className={`bg-primary h-8 w-8 rounded-full mr-2
                           ${genericFlex}`}
        >
          {props.profileimage}
        </div>
        <div>{props.accountname}</div>
      </div>

      {/* This will be a component later, for now it is placeholder code*/}
      <div className={`${genericFlex}`}>
        <div
          className={`mr-2 bg-primary h-6 w-6 rounded-full
                          ${tokenDimensionClass}
                          ${genericFlex}`}
        >
          {props.svg}
        </div>
        <div>{props.accountbalance}</div>
      </div>
    </div>
  );
}
