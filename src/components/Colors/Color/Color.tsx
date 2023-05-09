import React, { ComponentPropsWithoutRef } from "react";

export interface ColorRectangleProps extends ComponentPropsWithoutRef<"div"> {
  theme: string;
}

export function Theme(props: ColorRectangleProps) {
  return (
    <div className={`mb-2 ${props.theme}`}>
      <p className="w-40 h-10 text-center">{props.theme}</p>
      <Color color="bg-primary" />
      <Color color="bg-secondary" />
      <Color color="bg-tertiary" />
      <Color color="bg-brand" />
      <Color color="bg-neutral" />
      <Color color="bg-info" />
      <Color color="bg-s-success" />
      <Color color="bg-s-warning" />
      <Color color="bg-s-error" />
    </div>
  );
}

function Color(props: { color: string }) {
  return <div id={props.color} className={`w-40 h-10 mb-2 ${props.color}`} />;
}

export function Alias() {
  return (
    <div className="mb-2">
      <p className="w-40 h-10 mb-2 text-center "></p>
      <p className="w-40 h-10 mb-2 text-center ">primary</p>
      <p className="w-40 h-10 mb-2 text-center ">secondary</p>
      <p className="w-40 h-10 mb-2 text-center ">tertiary</p>
      <p className="w-40 h-10 mb-2 text-center ">brand</p>
      <p className="w-40 h-10 mb-2 text-center ">neutral</p>
      <p className="w-40 h-10 mb-2 text-center ">info</p>
      <p className="w-40 h-10 mb-2 text-center ">success</p>
      <p className="w-40 h-10 mb-2 text-center ">warning</p>
      <p className="w-40 h-10 mb-2 text-center ">error</p>
    </div>
  );
}
