import { ComponentPropsWithoutRef, cloneElement } from "react";
import { CrossTriangle } from "../Icons/Svg/Massa/CrossTriangle";
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
        <li className="list-none">
          <div className="inline mx-auto">{link}</div>
        </li>
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
          return cloneElement(menuLink, {
            iconOnly: true,
          });
        });
      return mapListReturnLinks(updatedMenuLinkIcons);
    } else {
      return mapListReturnLinks(props.listLinksBottom);
    }
  }

  return (
    <div
      className={`${
        isHovered
          ? "transition-all ease-linear duration-300 w-56"
          : "transition-all ease-linear duration-300 w-20"
      } p-4 bg-primary h-screen flex flex-col justify-between`}
      ref={hoverRef}
      data-testid="side-menu"
    >
      <div className="flex-col">
        <div className="flex items-center cursor-pointer ml-1">
          <div>
            <CrossTriangle size={40} />
          </div>
          {isHovered && (
            <div className="transition text-f-primary mas-menu-active text-center ml-5 ">
              {props.title}
            </div>
          )}
        </div>
        <div className="items-end mx-auto mt-10 flex-col">
          <div>{maplistLinksTop()}</div>
        </div>
      </div>
      <div className="items-end mx-auto mt-10 flex-col w-full">
        {/* Divider */}
        <div className="w-full h-[2px] bg-slate-600 rounded-3xl"></div>
        <div className="mt-3">{maplistLinksBottom()}</div>
      </div>
    </div>
  );
}
