// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ReactNode, useEffect, useRef } from 'react';

import { ComponentPropsWithoutRef, useState, MouseEvent } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useClickOutside from '../../util/useClickOutside';

export interface IOption extends ComponentPropsWithoutRef<'div'> {
  icon?: ReactNode;
  item: ReactNode;
  itemPreview?: ReactNode;
  select?: number;
}

interface DropdownProps extends ComponentPropsWithoutRef<'div'> {
  options: IOption[];
  size?: 'xs' | 'md';
  select?: number;
  readOnly?: boolean;
  defaultItem?: IOption;
  panelClass?: string;
  fullWidth?: boolean;
}

function Icon({ toggle }: { toggle: boolean }) {
  let IconClassName = 'max-w-fit stroke-current';

  return toggle ? (
    <FiChevronUp className={IconClassName} />
  ) : (
    <FiChevronDown className={IconClassName} />
  );
}

export function Dropdown(props: DropdownProps) {
  let {
    size = 'md',
    select = 0,
    options,
    readOnly = false,
    defaultItem,
    panelClass = '',
    fullWidth = true,
    ...rest
  } = props;

  const ref = useRef(null);

  const classes = {
    xs: {
      button: `${
        fullWidth ? 'w-full' : ''
      } px-3 py-4 h-7 rounded hover:rounded`,
      panel: `${fullWidth ? 'w-full' : ''} rounded hover:rounded ${panelClass}`,
      item: 'px-3 py-4 h-7 rounded hover:rounded',
      icon: 'pr-3',
    },
    md: {
      button: `${
        fullWidth ? 'w-full' : ''
      } px-6 py-3 h-14 rounded-lg hover:rounded-lg`,
      panel: `${
        fullWidth ? 'w-full' : ''
      } rounded-lg hover:rounded-lg ${panelClass}`,
      item: `${
        fullWidth ? 'w-full' : ''
      } px-6 py-3 h-14 rounded-lg hover:rounded-lg`,
      icon: 'pr-2',
    },
  };

  const firstObject = options[select];
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(defaultItem ?? firstObject);
  const hidden = toggle ? '' : 'hidden';

  useClickOutside(ref, () => {
    setToggle(false);
  });

  // refresh the selected item when the select prop changes
  useEffect(() => {
    setSelected(defaultItem ?? options[select]);
  }, [select, options]);

  const customButtonClass = classes[size].button;
  const customItemClass = classes[size].item;
  const customIconClass = classes[size].icon;
  const customPanelClass = classes[size].panel;

  function toggleDropdown() {
    if (readOnly) return;

    setToggle(!toggle);
  }

  function handleOnClick(
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    idx: number,
  ) {
    let { onClick } = options[idx];

    setSelected(options[idx]);
    setToggle(!toggle);
    onClick?.(e);
  }

  function renderPreview(option?: IOption) {
    if (option) {
      return option.itemPreview ?? option.item;
    }
  }

  return (
    <div
      ref={ref}
      className="relative flex-none"
      data-testid="dropdown"
      {...rest}
    >
      <button
        data-testid="dropdown-button"
        onClick={toggleDropdown}
        type="button"
        className={`flex default-button border-secondary justify-between
                    ${customButtonClass}
                    items-center text-f-primary bg-secondary
                    hover:bg-tertiary hover:border-tertiary
                    disabled:text-f-disabled-1 disabled:bg-c-disabled-2 disabled:border-c-disabled-1`}
      >
        <div data-testid="dropdown-selected-icon" className={customIconClass}>
          {selected?.icon}
        </div>
        <div
          data-testid="dropdown-selected-item"
          className="mas-menu-active p-2 truncate"
        >
          {renderPreview(selected)}
        </div>
        <Icon toggle={toggle} />
      </button>
      <div
        id="options"
        className={`${hidden} mt-2 bg-secondary py-1.5 absolute z-10 ${customPanelClass}`}
      >
        <ul
          className="h-auto max-h-64 overflow-y-auto"
          aria-labelledby="dropdownUsersButton"
        >
          {options.map((option, idx) => {
            return (
              <li data-testid={`dropdown-item-${idx}`} key={idx}>
                <div
                  data-testid="dropdown-label"
                  onClick={(e) => handleOnClick(e, idx)}
                  className={`flex items-center cursor-pointer text-f-primary
                              ${customItemClass}
                              hover:bg-neutral/[.15] active:bg-neutral/[.3]
                              disabled:text-f-disabled-1 disabled:bg-c-disabled-2 disabled:border-c-disabled-1`}
                >
                  <div
                    data-testid={`dropdown-icon-${idx}`}
                    className={customIconClass}
                  >
                    {option.icon}
                  </div>
                  <div
                    data-testid={`dropdown-item-${idx}`}
                    className="mas-menu-active p-2 truncate"
                  >
                    {option.item}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
