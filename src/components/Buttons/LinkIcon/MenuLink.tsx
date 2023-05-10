import React, { ComponentPropsWithoutRef, useState } from "react";

export interface MenuLinkProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  icon?: JSX.Element;
  color?: string;
  onClick?: () => void; // Add onClick prop of type function that doesn't return anything
}

export function MenuLink(props: MenuLinkProps) {
  const [isActive, setIsActive] = useState(false);
  let divStyle = `flex mas-menu-default cursor-pointer rounded-lg p-3 
  items-center text-neutral hover:bg-tertiary`;

  let divActiveStyle = isActive ? "bg-primary" : "bg-brand";

  function onClickHandler(): void {
    setIsActive(true);
    if (props.onClick) {
      // Call the onClick prop function if it exists
      props.onClick();
    }
  }

  return (
    <div
      data-testid="link-icon"
      className={`${divStyle}
                  ${divActiveStyle}}`}
      onClick={onClickHandler}
    >
      {props.icon}
      <p className="ml-1">{props.children}</p>
    </div>
  );
}
