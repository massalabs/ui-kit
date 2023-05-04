import React from "react";

export interface SvgIconProps {
  svg: React.ReactNode;
  bg: string;
}

export function SvgIcon({ ...props }) {
  return (
    <div
      className={`mr-2 bg-primary h-6 w-6 rounded-full`}
      data-testid="svg-icon-component"
    >
      {props.svg}
    </div>
  );
}
