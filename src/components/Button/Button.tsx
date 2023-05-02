import React, { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  iconStart?: string;
  iconEnd?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      data-testid="primary-button"
      type="button"
      className={
        "px-4 py-3 rounded-lg text-primary bg-default hover:bg-hover " +
        "active:bg-pressed disabled:bg-disabled_primary disabled:cursor-not-allowed"
      }
      {...props}
    >
      <div className="flex mas-buttons gap-[8px]">
        {props.iconStart && (
          <span>
            <img src={props.iconStart} alt="icon-start" />
          </span>
        )}
        {props.children}
        {props.iconEnd && (
          <span>
            <img src={props.iconEnd} alt="icon-end" />
          </span>
        )}
      </div>
    </button>
  );
}
