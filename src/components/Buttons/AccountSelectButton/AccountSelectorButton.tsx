import { ComponentPropsWithoutRef } from "react";

export interface AccountSelectorProps extends ComponentPropsWithoutRef<"div"> {
  theme?: string;
  profileimage: React.ReactNode;
  accountname: string;
<<<<<<< HEAD
  svg: React.ReactNode;
=======
  massatoken: React.ReactNode;
>>>>>>> 457945b (Refactored AccSelectBtn + test suits)
  accountbalance: string;
  children?: React.ReactNode;
}

export function AccountSelectorButton(props: AccountSelectorProps) {
  // Specific classes for the account selector button
  const accountSelectorClass = "flex flex-row items-center justify-between";

  const hoverClass = `hover:bg-info`;
<<<<<<< HEAD
  const activeClass = `active:bg-c-hover`;
=======
  const activeClass = `active:bg-secondaryAlt`;
>>>>>>> 457945b (Refactored AccSelectBtn + test suits)

  // Generic classes
  const genericFlex = "flex justify-center items-center";

<<<<<<< HEAD
=======
  // correct text displacement due to line height

>>>>>>> 457945b (Refactored AccSelectBtn + test suits)
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

<<<<<<< HEAD
      {/* This will be a component later, for now it is placeholder code*/}
      <div className={`${genericFlex}`}>
        <div
          className={`mr-2 bg-primary h-6 w-6 rounded-full
                          ${tokenDimensionClass}
                          ${genericFlex}`}
        >
          {props.svg}
        </div>
=======
      <div className={`${genericFlex}`}>
        <div
          className={`mr-2 
                          ${tokenDimensionClass}`}
        >
          {props.massatoken}
        </div>
        {/* top used to counter act the line-height 19 defined in the font presets */}
>>>>>>> 457945b (Refactored AccSelectBtn + test suits)
        <div>{props.accountbalance}</div>
      </div>
    </div>
  );
}
