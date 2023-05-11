import React, { useState, ComponentPropsWithoutRef, cloneElement } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { CrossTriangle } from "../Icons/Svg/SvgComponent";
import { useHover } from "../../hooks/useHover";

export interface SideMenuProps extends ComponentPropsWithoutRef<"button"> {
  listLinksTop?: JSX.Element[];
  listLinksBottom?: JSX.Element[];
  title?: string;
}

export function SideMenu(props: SideMenuProps) {
  const { placeholder } = props;

  let iconClass = `w-5 h-5 inline-block align-text-bottom text-neutral`;

  let open = {
    type: "text",
    icon: (
      <div data-testid="icon-open">
        <FiEyeOff className={iconClass} />
      </div>
    ),
  };

  let close = {
    type: "sideMenu",
    icon: (
      <div data-testid="icon-close">
        <FiEye className={iconClass} />
      </div>
    ),
  };

  const [{ type, icon }, setType] = useState(close);
  const [hover, setHover] = useState(false);
  const [sideMenu, setPassword] = useState("");

  const hoverClass = `hover:border hover:border-solid hover:border-tertiary`;
  const focusClass = `focus:border focus:border-solid focus:border-brand focus:text-neutral`;
  const placeHolderClass =
    sideMenu.length > 0 ? `text-neutral` : `text-tertiary`;

  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  function handleOnChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassword(e.target.value);
  }

  function toggleIcon() {
    return type === "sideMenu" ? setType(open) : setType(close);
  }

  function toggleHover() {
    return setHover(!hover);
  }

  // generic function to map list of links
  function mapListReturnLinks(list: JSX.Element[] | undefined) {
    return (
      list &&
      list.map((link) => (
        <ul>
          <div className="inline -ml-9">{link}</div>
        </ul>
      ))
    );
  }

  function maplistLinksTop() {
    if (!isHovered) {
      let updatedMenuLinkIcons =
        props.listLinksTop &&
        props.listLinksTop.map((menuLink) => {
          return cloneElement(menuLink, { iconOnly: true });
        });
      return mapListReturnLinks(updatedMenuLinkIcons);
    } else {
      return mapListReturnLinks(props.listLinksTop);
    }
  }

  function maplistLinksBottom() {
    if (!isHovered) {
      let updatedMenuLinkIcons =
        props.listLinksBottom &&
        props.listLinksBottom.map((menuLink) => {
          return cloneElement(menuLink, { iconOnly: true });
        });
      return mapListReturnLinks(updatedMenuLinkIcons);
    } else {
      return mapListReturnLinks(props.listLinksBottom);
    }
  }

  return (
    <div className="flex-row">
      <div
        className={`${isHovered ? "w-56" : "w-20"} p-4 bg-secondary`}
        ref={hoverRef}
      >
        <div className="flex-col items">
          <div className="flex items-center cursor-pointer">
            <div>
              <CrossTriangle size={40} />
            </div>
            {isHovered && (
              <div className="text-f-primary mas-menu-active text-center ml-3">
                {props.title}
              </div>
            )}
          </div>
          <li>{maplistLinksTop()}</li>
          <div>{maplistLinksBottom()}</div>
        </div>
      </div>
    </div>
  );
}
