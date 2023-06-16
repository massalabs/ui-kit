// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import {
  ComponentPropsWithoutRef,
  ReactNode,
  ChangeEvent,
  useState,
} from 'react';
import { FiMenu } from 'react-icons/fi';

export interface SidePanelProps extends ComponentPropsWithoutRef<'div'> {
  side?: 'left' | 'right';
  customClass?: string;
  children?: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

export function SidePanel({ ...props }) {
  const {
    side = 'right',
    children,
    onClose,
    onOpen,
    customClass,
    ...rest
  } = props;
  const [toggle, setToggle] = useState(false);

  const isRight = side === 'right';

  const sideClass = isRight ? 'right-0' : 'left-0';
  const toggleClass = toggle ? 'w-[450px]' : 'w-10';
  const iconClass = isRight ? 'flex-row' : 'flex-row-reverse';

  function toggleDropdown(e: ChangeEvent<unknown>) {
    setToggle(!toggle);

    toggle ? onClose?.(e) : onOpen?.(e);
  }

  return (
    <div
      data-testid="side-panel"
      className={`fixed top-0 ${sideClass} ${toggleClass} 
      border-l-primary h-screen bg-secondary ${customClass}`}
      {...rest}
    >
      <div className={`flex ${iconClass} h-full`}>
        <button onClick={toggleDropdown} className="p-2 flex items-center">
          <FiMenu className="h-6 w-6 transform rotate-90 text-neutral" />
        </button>
        <div className="flex">{toggle ? children : null}</div>
      </div>
    </div>
  );
}
