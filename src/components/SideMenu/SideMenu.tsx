import { ComponentPropsWithoutRef, cloneElement, useState } from "react";
import { CrossTriangle } from "../Icons/Svg/Massa/CrossTriangle";

export interface SideMenuProps extends ComponentPropsWithoutRef<"button"> {
  listLinksTop?: JSX.Element[];
  listLinksBottom?: JSX.Element[];
  title?: string;
}

export function SideMenu(props: SideMenuProps) {
  // const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const [hover, setHover] = useState(false);
  const [IdSelected, setIdSelected] = useState("UnSelected");

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
    if (hover) {
      let updatedMenuLinkIcons =
        list &&
        list.map((menuLink) => {
          menuLink.props.id === IdSelected;
          return cloneElement(menuLink, {
            iconOnly: true,
          });
        });
      return mapListReturnLinks(updatedMenuLinkIcons);
    } else {
      return mapListReturnLinks(list);
    }
  }

  function onHover() {
    setHover(!hover);
  }

  return (
    <div
      className={`${
        hover ? "w-56" : "w-20"
      } transition-all ease-linear duration-300 p-4 bg-primary h-screen flex flex-col justify-between`}
      data-testid="side-menu"
      onMouseOut={onHover}
      onMouseOver={onHover}
    >
      <div className="flex-col">
        <div className="flex items-center cursor-pointer ml-1">
          <div>
            <CrossTriangle size={40} />
          </div>
          {hover ?? (
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
export function handleActive(e: any) {
  // contain the id of the selected element
  console.log(e.currentTarget.dataset.value);
}
