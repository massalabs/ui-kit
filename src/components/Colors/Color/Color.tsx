import React, { ComponentPropsWithoutRef } from "react";

export interface ColorRectangleProps extends ComponentPropsWithoutRef<"div"> {
  color: string;
}

export function Color(props: ColorRectangleProps) {
  return (
    <div className="flex ">
      <div className={`w-[156px] mb-2 h-[40px] ${props.color}`}></div>
    </div>
  );
}
