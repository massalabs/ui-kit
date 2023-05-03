import React, { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  preIcon?: JSX.Element;
  posIcon?: JSX.Element;
}

export function Button(props: ButtonProps) {
  const hoverClass = "hover:bg-tertiaryAlt";
  const activeClass = "active:bg-secondaryAlt";
  const disabledClass =
    "disabled:bg-infoAlt disabled:cursor-not-allowed disabled:text-white";
  const paddingClass = "px-4 py-3";
  const sizeClass = "w-full h-12";

  return (
    <button
      data-testid="primary-button"
      type="button"
      className={`rounded-lg text-primary bg-neutral
        ${sizeClass} ${paddingClass}
        ${hoverClass}
        ${activeClass}
        ${disabledClass}`}
      {...props}
    >
      <div className="w-fit m-auto flex gap-[8px] mas-buttons">
        <div className="m-auto">{props.preIcon && props.preIcon}</div>
        {props.children}
        <div className="m-auto">{props.posIcon && props.posIcon}</div>
      </div>
    </button>
  );
}
