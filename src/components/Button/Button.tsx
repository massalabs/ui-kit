import React, { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  preIcon?: JSX.Element;
  posIcon?: JSX.Element;
  variant: string;
}

export function Button(props: ButtonProps) {
  const paddingClass = "px-4 py-3";
  const sizeClass = "w-full h-12";
  const hoverClass =
    props.variant === "primary"
      ? "hover:bg-tertiaryAlt"
      : "hover:bg-neutral/[.15]";
  const activeClass =
    props.variant === "primary"
      ? "active:bg-secondaryAlt"
      : "active:bg-neutral/30";
  const disabledClass =
    props.variant === "primary"
      ? "disabled:bg-infoAlt disabled:cursor-not-allowed disabled:text-white"
      : "disabled:bg-infoAltBis disabled:cursor-not-allowed disabled:text-infoAlt disabled:border-infoAlt";
  const textClass =
    props.variant === "primary" ? "text-primary" : "text-primaryAlt";
  const backgroundClass =
    props.variant === "primary" ? "bg-neutral" : "border border-primaryAlt";

  return (
    <button
      data-testid={`${props.variant}-button`}
      type="button"
      className={`rounded-lg
        ${sizeClass}
        ${paddingClass}
        ${backgroundClass}
        ${textClass}
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
