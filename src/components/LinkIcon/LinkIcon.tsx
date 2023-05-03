import React, { ComponentPropsWithoutRef, useState } from "react";

export interface LinkIconProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  icon?: JSX.Element;
  color?: string;
}

export function LinkIcon(props: LinkIconProps) {
  const [isActive, setIsActive] = useState(false);
  let styleDiv = `flex mas-menu-default rounded-lg p-3 
  items-center text-neutral hover:bg-tertiary`;

  let styleActiveDiv = `${isActive ? "bg-primary" : "bg-brand"}`;

  function onClickHandler(): void {
    setIsActive(true);
  }

  return (
    <div
      data-testid="link-icon"
      className={`${styleDiv}
                  ${styleActiveDiv}}`}
      onClick={onClickHandler}
    >
      {props.icon}
      <p className="ml-1">{props.children}</p>
    </div>
  );
}
