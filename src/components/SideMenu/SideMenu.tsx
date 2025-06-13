// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import type { JSX } from 'react';

import { useState, cloneElement, ComponentPropsWithoutRef } from 'react';

interface ISideMenuItemProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
  icon: JSX.Element;
  active?: boolean;
  footer?: boolean;
  onClickItem?: () => void;
}

interface ISideMenuConfProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  logo?: JSX.Element;
  fullMode?: boolean;
}

interface ISideMenuProps extends ComponentPropsWithoutRef<'div'> {
  items?: ISideMenuItemProps[];
  conf: ISideMenuConfProps;
  onClickLogo?: () => void;
}

interface IShortItemProps extends ComponentPropsWithoutRef<'div'> {
  icon: JSX.Element;
  active?: boolean;
}

interface ILongItemProps extends ComponentPropsWithoutRef<'div'> {
  icon: JSX.Element;
  label: string;
  active?: boolean;
  onClickItem?: () => void;
}

export function ShortItem(props: IShortItemProps) {
  const { icon, active } = props;
  const clonedIcon = cloneElement(icon, {
    className: 'w-6 h-6 stroke-current text-i-tertiary',
  });
  const activeClass = active
    ? 'bg-c-default text-f-secondary'
    : 'hover:bg-tertiary text-f-primary';

  return (
    <div
      className={`flex items-center justify-center w-12 h-12 mt-2 rounded ${activeClass}`}
    >
      <div className="w-6 h-6 stroke-current">{clonedIcon}</div>
    </div>
  );
}

export function LongItem(props: ILongItemProps) {
  const { icon, label, active, onClickItem } = props;
  const clonedIcon = cloneElement(icon, {
    className: 'w-6 h-6 stroke-current text-i-tertiary',
  });
  const activeClass = active
    ? 'bg-c-default text-f-secondary'
    : 'hover:bg-tertiary text-f-primary';

  return (
    <>
      <div
        className={`flex items-center w-full h-12 px-3 mt-2 pl-5 rounded hover:cursor-pointer ${activeClass}`}
        onClick={onClickItem}
      >
        {clonedIcon}
        <span className="ml-2 mas-menu-default">{label}</span>
      </div>
    </>
  );
}

function ShortMenu(props: ISideMenuProps) {
  const { items, conf, onClickLogo } = props;
  const { logo } = conf;

  return (
    <div className="flex flex-col items-center w-20 h-full overflow-hidden bg-secondary">
      <div
        className="flex items-center justify-center mt-3 hover:cursor-pointer"
        onClick={onClickLogo}
      >
        {logo}
      </div>
      <div className="flex flex-col items-center mt-3">
        {items
          ?.filter((item) => !item.footer)
          .map(({ ...props }, idx) => (
            <ShortItem key={idx} {...props} />
          ))}
      </div>
      <div className="w-full px-4 py-2 mt-auto">
        {items
          ?.filter((item) => item.footer)
          .map(({ ...props }, idx) => (
            <ShortItem key={idx} {...props} />
          ))}
      </div>
    </div>
  );
}

function LongMenu(props: ISideMenuProps) {
  const { items, conf, onClickLogo } = props;
  const { logo, title } = conf;

  return (
    <div className="flex flex-col items-center w-64 h-full overflow-hidden bg-secondary">
      <div
        className="flex w-full items-center px-5 mt-3 hover:cursor-pointer"
        onClick={onClickLogo}
      >
        {logo}
        <span className="w-full ml-3 text-center text-f-primary mas-menu-active">
          {title}
        </span>
      </div>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3">
          {items
            ?.filter((item) => !item.footer)
            .map(({ ...props }, idx) => (
              <LongItem key={idx} {...props} />
            ))}
        </div>
      </div>
      <div className="w-full px-2 py-2 mt-auto">
        {items
          ?.filter((item) => item.footer)
          .map(({ ...props }, idx) => (
            <LongItem key={idx} {...props} />
          ))}
      </div>
    </div>
  );
}

export function SideMenu(props: ISideMenuProps) {
  const { items, conf, onClickLogo } = props;
  const { fullMode } = conf;

  const [hover, setHover] = useState(true);

  const fullModeClass = fullMode ? 'fixed top-0 left-0 right-0' : '';
  const hoverClass = hover ? 'w-20' : 'w-64';

  function handleOnMouseOver(e: React.MouseEvent) {
    e.preventDefault();
    setHover(!hover);
  }

  return (
    <div
      data-testid="side-menu"
      className={`${fullModeClass} h-screen ${hoverClass}`}
      onMouseEnter={hover ? handleOnMouseOver : undefined}
      onMouseLeave={hover ? undefined : handleOnMouseOver}
    >
      {hover ? (
        <ShortMenu items={items} conf={conf} onClickLogo={onClickLogo} />
      ) : (
        <LongMenu items={items} conf={conf} onClickLogo={onClickLogo} />
      )}
    </div>
  );
}
