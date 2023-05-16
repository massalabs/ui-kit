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
  iconOnly?: boolean;
  isActive?: boolean;
  key: string;
  passId?: (id: string) => void;
}

export function MenuLink(props: MenuLinkProps) {
  const { onClick } = props;
  const [isActive, setIsActive] = useState(props.isActive || false);
  const divStyle = `flex mas-menu-default cursor-pointer rounded-lg p-3 
  items-center text-neutral hover:bg-tertiary `;
  const divActiveStyle = isActive
    ? " bg-neutral text-primary"
    : " bg-primary text-neutral";

  function onClickHandler(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ): void {
    setIsActive(!isActive);
    onClick?.(e);
    props.passId?.(props.key);
  }

  return (
    <div
      data-testid="menu-link"
      className={`${divStyle}
                  ${divActiveStyle}`}
      onClick={(e) => onClickHandler(e)}
    >
      {props.icon}
      {!props.iconOnly && <p className="ml-3">{props.children}</p>}
    </div>
  );
}
