import React, { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  preIcon?: JSX.Element;
  posIcon?: JSX.Element;
}

export function Button(props: ButtonProps) {
  const paddingClass = "px-4 py-3";
  const sizeClass = "w-full h-12";
  const backgroundClass = "bg-c-default";
  const textClass = "text-primary";
  const hoverClass = "hover:bg-c-hover";
  const activeClass = "active:bg-c-pressed";
  const disabledClass =
    "disabled:bg-c-disabled-1 disabled:text-primary disabled:cursor-not-allowed";

  return (
    <button
      data-testid="primary-button"
      type="button"
      className={`rounded-lg
        ${sizeClass}
        ${paddingClass}
        ${backgroundClass}
        ${textClass}
        ${hoverClass}
        ${activeClass}
        ${disabledClass}
      `}
      {...props}
    >
      <div className="w-fit m-auto flex gap-2 mas-buttons">
        <div className="m-auto">{props.preIcon && props.preIcon}</div>
        {props.children}
        <div className="m-auto">{props.posIcon && props.posIcon}</div>
      </div>
    </button>
  );
}
