// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import {
  ReactNode,
  ComponentPropsWithoutRef,
  useState,
  useEffect,
  cloneElement,
  isValidElement,
  Children,
} from 'react';
import { FiX } from 'react-icons/fi';

interface IPopupModalProps extends ComponentPropsWithoutRef<'div'> {
  status?: 'hidden' | 'displayed' | undefined;
  fullMode?: boolean;
  children?: ReactNode;

  // both exposed function should be declared as:
  // onOpen?(): any;
  // however by some reason jest does not recognize
  onOpen?: () => void;
  onClose?: () => void;
}

interface IPopupModalNodeProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  _onClose?: () => void;
}

export function PopupModalHeader(props: IPopupModalNodeProps) {
  const { children, _onClose } = props;

  function handleClose() {
    _onClose?.();
  }

  if (children) {
    return (
      <div
        data-testid="popup-modal-header"
        className="flex items-start justify-between p-4 rounded-t"
      >
        {children}
        <button
          data-testid="popup-modal-header-close"
          className="text-neutral bg-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
                      hover:bg-tertiary hover:text-c-primary"
          type="button"
          onClick={handleClose}
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
    );
  }
  return null;
}

export function PopupModalContent(props: IPopupModalNodeProps) {
  const { children } = props;

  if (children) {
    return (
      <div data-testid="popup-modal-content" className="p-6 space-y-6">
        {children}
      </div>
    );
  }
  return null;
}

export function PopupModalFooter(props: IPopupModalNodeProps) {
  const { children } = props;

  if (children) {
    return (
      <div
        data-testid="popup-modal-footer"
        className="flex items-center p-6 space-x-2 border-t border-tertiary rounded-b"
      >
        {children}
      </div>
    );
  }
  return null;
}

export function PopupModal(props: IPopupModalProps) {
  const {
    status,
    fullMode = false,
    children,
    onOpen,
    onClose,
    ...rest
  } = props;
  const [hidden, setHidden] = useState(status);
  const fullModeClass = fullMode ? 'fixed top-0 left-0 right-0' : '';

  useEffect(() => {
    handleOpen();
  }, []);

  function handleOpen() {
    onOpen?.();
  }

  function handleClose() {
    setHidden('hidden');

    onClose?.();
  }

  var appendedChildren = Children.map(children, (child) => {
    return cloneElement(isValidElement(child) ? child : <></>, {
      _onClose: handleClose,
    });
  });

  return (
    <div
      data-testid="popup-modal"
      className={`${hidden} ${fullModeClass} 
                  bg-tertiary bg-opacity-75 w-full p-8 h-screen flex justify-center items-center max-h-full
                  overflow-x-hidden overflow-y-auto`}
      {...rest}
    >
      <div className="relative  max-h-full w-1/2 min-w-[745]">
        <div className="relative bg-primary rounded-lg shadow">
          {appendedChildren}
        </div>
      </div>
    </div>
  );
}
