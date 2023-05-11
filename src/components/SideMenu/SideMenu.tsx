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
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

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
    <div
      className={`${isHovered ? "w-56" : "w-20"} p-4 bg-secondary`}
      ref={hoverRef}
      data-testid="side-menu"
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
  );
}
