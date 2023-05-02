import { ComponentPropsWithoutRef } from "react";

export interface AccountSelectorProps
  extends ComponentPropsWithoutRef<"button"> {
  theme?: string;
  profileImage: React.ReactNode;
  accountName: string;
  massaToken: React.ReactNode;
  accountBalance: string;
  children?: React.ReactNode;
}

export function AccountSelectorButton(props: AccountSelectorProps) {
  return (
    // this div below is used to simulate the theme
    <button
      className="bg-neutral text-primary font-bold w-[498px] py-2 px-4 rounded-lg"
      {...props}
      data-testid="account-selector-button"
    >
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-row items-center">
          <div className="bg-primary h-fit w-fit rounded-full p-2 mr-2 ">
            {props.profileImage}
          </div>
          <div>{props.accountName}</div>
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-2">{props.massaToken}</div>
          <div>{props.accountBalance}</div>
        </div>
      </div>
    </button>
  );
}
