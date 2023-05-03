import React, { ComponentPropsWithoutRef, useState } from "react";

export interface LinkIconProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  icon?: string;
}

export function LinkIcon(props: LinkIconProps) {
  const [isActive, setisActive] = useState(false);
  let styleDiv = `flex mas-menu-default  ${isActive ? " bg-primary" : ""} 
                  rounded-lg p-3 items-center text-neutral hover:bg-tertiary 
`;
  const onclickHandler = () => {
    props.onClick;
    setisActive((current) => !current);
  };
  return (
    <button
      data-testid="link-icon"
      className={styleDiv}
      onClick={onclickHandler}
      {...props}
    >
      {props.icon && <img src={props.icon} alt="icon" />}
      <p className="ml-2">{props.children}</p>
    </button>
  );
}
