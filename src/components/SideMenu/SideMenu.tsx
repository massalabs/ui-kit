import { ComponentPropsWithoutRef, cloneElement, useState } from "react";
import { CrossTriangle } from "../Icons/Svg/Massa/CrossTriangle";
import { useHover } from "../../hooks/useHover";

export interface SideMenuProps extends ComponentPropsWithoutRef<"button"> {
  listLinksTop?: JSX.Element[];
  listLinksBottom?: JSX.Element[];
  title?: string;
}

export function SideMenu(props: SideMenuProps) {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const [IdSelected, setIdSelected] = useState("UnSelected");

  function isOneSelected() {
    if (IdSelected !== "UnSelected") {
      return true;
    }
    return false;
  }
  // generic function to map list of links
  function mapListReturnLinks(list: JSX.Element[] | undefined) {
    return (
      list &&
      list.map((link) => (
        <li className="list-none my-4 ">
          <div className="inline mx-auto">{link}</div>
        </li>
      ))
    );
  }

  function maplistLinks(list: JSX.Element[] | undefined) {
    if (!isHovered || isOneSelected()) {
      let updatedMenuLinkIcons =
        list &&
        list.map((menuLink) => {
          return cloneElement(menuLink, {
            iconOnly: true,
            // onClick: () => handleOneIsSelected(e),
            sendId: (id: string) => handleOneIsSelected(id),
          });
        });
      return mapListReturnLinks(updatedMenuLinkIcons);
    } else {
      return mapListReturnLinks(list);
    }
  }

  function handleOneIsSelected(id: string) {
    if (id !== IdSelected) {
      setIdSelected(id);
    } else {
      setIdSelected("UnSelected");
    }
  }

  return (
    <div
      className={`${
        isHovered || isOneSelected()
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
          {(isHovered || isOneSelected()) && (
            <div className="transition text-f-primary mas-menu-active text-center ml-5 ">
              {props.title}
            </div>
          )}
        </div>
        <div className="items-end mx-auto mt-10 flex-col">
          <div>{maplistLinks(props.listLinksTop)}</div>
        </div>
      </div>
      <div className="items-end mx-auto mt-10 flex-col w-full">
        {/* Divider */}
        <div className="w-full h-[2px] bg-slate-600 rounded-3xl"></div>
        <div className="mt-3">{maplistLinks(props.listLinksBottom)}</div>
      </div>
    </div>
  );
}
