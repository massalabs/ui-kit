import React, { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  iconStart?: JSX.Element;
  iconEnd?: JSX.Element;
}

export function Button(props: ButtonProps) {
  return (
    <button
      data-testid="primary-button"
      type="button"
      className={
        "px-4 py-3 rounded-lg text-primary bg-default_primary hover:bg-hover_primary " +
        "active:bg-pressed_primary disabled:bg-disabled_primary disabled:cursor-not-allowed disabled:text-neutral"
      }
      {...props}
    >
      <div className="flex mas-buttons gap-[8px]">
        <div className="m-auto">{props.iconStart && props.iconStart}</div>
        {props.children}
        <div className="m-auto">{props.iconEnd && props.iconEnd}</div>
      </div>
    </button>
  );
}
