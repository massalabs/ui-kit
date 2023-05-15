import {
  ComponentPropsWithoutRef,
  useState,
  ReactNode,
  MouseEvent,
} from "react";

export interface MenuLinkProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  icon?: JSX.Element;
  color?: string;
}

export function MenuLink(props: MenuLinkProps) {
  const { onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const divStyle = `flex mas-menu-default cursor-pointer rounded-lg p-3 
  items-center text-neutral hover:bg-tertiary `;
  const divActiveStyle = isActive
    ? " bg-primary text-neutral"
    : " bg-neutral text-primary";

  function onClickHandler(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ): void {
    setIsActive(!isActive);
    onClick?.(e);
  }

  return (
    <div
      data-testid="menu-link"
      className={`${divStyle}
                  ${divActiveStyle}`}
      onClick={(e) => onClickHandler(e)}
    >
      {props.icon}
      <p className="ml-1">{props.children}</p>
    </div>
  );
}
