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
  // store key of selected menu link
  let menuLinkSelectedKey = "0";
  // generic function to map list of links
  function mapListReturnLinks(list: JSX.Element[] | undefined) {
    return (
      list &&
      list.map((link) => (
        <li className="list-none">
          <div className="inline -ml-9">{link}</div>
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
          // test if menu link is active, if so disable others
          if (menuLinkSelectedKey === menuLink.key) {
            return cloneElement(menuLink, {
              iconOnly: true,
              isActive: true,
              passId: handleOnClickMenuLink,
            });
          }
          return cloneElement(menuLink, {
            iconOnly: true,
            isActive: false,
            passId: handleOnClickMenuLink,
          });
        });
      return mapListReturnLinks(updatedMenuLinkIcons);
    } else {
      return mapListReturnLinks(props.listLinksBottom);
    }
  }

  function handleOnClickMenuLink(key: string) {
    console.log("handleOnClickMenuLinks");
    menuLinkSelectedKey = key;
  }

  return (
    <div
      className={`${
        isHovered
          ? "transition-all ease-linear duration-300 w-56"
          : "transition-all ease-linear duration-300 w-20"
      } p-4 bg-primary h-screen`}
      ref={hoverRef}
      data-testid="side-menu"
    >
      <div className="flex-col items">
        <div className="flex items-center cursor-pointer">
          <div>
            <CrossTriangle size={40} />
          </div>
          {isHovered && (
            <div className="transition text-f-primary mas-menu-active text-center ml-3 ">
              {props.title}
            </div>
          )}
        </div>
        <div>{maplistLinksTop()}</div>
        <div>{maplistLinksBottom()}</div>
      </div>
    </div>
  );
}
