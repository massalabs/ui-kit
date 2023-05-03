import React, { ComponentPropsWithoutRef, useState } from "react";
import { IconType } from "react-icons/lib";
import { IconContext } from "react-icons";

export interface LinkIconProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  icon?: IconType;
  color?: string;
}

export function LinkIcon(props: LinkIconProps) {
  const [isActive, setisActive] = useState(false);
  let styleDiv = `flex mas-menu-default rounded-lg p-3 items-center text-neutral hover:bg-tertiary`;
  if (isActive) {
    styleDiv += ` bg-primary`;
  }
  const onclickHandler = () => {
    if (props.onClick) {
      props.onClick;
    }
    setisActive((current) => !current);
  };
  return (
    <button
      data-testid="link-icon"
      className={styleDiv}
      onClick={onclickHandler}
      {...props}
    >
      <IconContext.Provider
        value={{
          color: `hsl(var(--twc-${props.color ? props.color : "brand"}))`,
        }}
      >
        {props.icon && <props.icon className="" />}
      </IconContext.Provider>
      <p className="ml-2">{props.children}</p>
    </button>
  );
}
