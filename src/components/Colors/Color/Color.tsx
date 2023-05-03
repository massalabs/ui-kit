import React, { ComponentPropsWithoutRef } from "react";

export interface ColorRectangleProps extends ComponentPropsWithoutRef<"div"> {
  color: string;
}

export function Color(props: ColorRectangleProps) {
  return (
    <div className="flex ">
      <div className={`w-40  h-10 mb-2 ${props.color}`}></div>
    </div>
  );
}
