import { ComponentPropsWithoutRef } from "react";
import { IconContext } from "react-icons";
import { ReactElement } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"div"> {
  src: ReactElement;
  color: string;
  className?: string;
  size: string;
}

export function Icon(props: IconProps) {
  return (
    <IconContext.Provider
      value={{
        color: props.color,
        className: props.className,
        size: props.size,
      }}
    >
      <div {...props} data-testid="icon">
        {props.src}
      </div>
    </IconContext.Provider>
  );
}
