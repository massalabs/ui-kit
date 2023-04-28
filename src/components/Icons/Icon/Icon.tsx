import { ComponentPropsWithoutRef } from "react";

import { ReactElement } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"div"> {
  src: ReactElement;
}

export function Icon(props: IconProps) {
  return (
    <div data-testid="icon" {...props}>
      {props.src}
    </div>
  );
}
