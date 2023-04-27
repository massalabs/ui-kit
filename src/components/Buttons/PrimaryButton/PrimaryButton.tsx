import React, { ComponentPropsWithoutRef } from "react";

export interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      data-testid="primary-button"
      type="button"
      className="w-64 h-48 rounded-lg text-neutral bg-primary hover:bg-tertiary"
      {...props}
    >
      {props.children}
    </button>
  );
}
