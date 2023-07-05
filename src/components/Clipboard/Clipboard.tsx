// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { CSSProperties } from 'react';

import { useState, ComponentPropsWithoutRef } from 'react';
import { FiCopy, FiCheckCircle } from 'react-icons/fi';
import { InputMessage } from './../Input/Input';

// eslint-disable-next-line max-len
// https://stackoverflow.com/questions/71873824/copy-text-to-clipboard-cannot-read-properties-of-undefined-reading-writetext
import copy from 'copy-to-clipboard';

interface ClipboardProps extends ComponentPropsWithoutRef<'div'> {
  rawContent: string;
  displayedContent?: string;
  error?: string;
  success?: string;
  customClass?: string;
  toggleHover?: boolean;
}

export function Clipboard(props: ClipboardProps) {
  const {
    error: errorMessage,
    success: successMessage,
    rawContent,
    displayedContent = rawContent,
    customClass,
    toggleHover,
    ...rest
  } = props;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // check to see if mouse is hovering over the component
  const [isHovered, setIsHovered] = useState(false);
  // check params, if undefiend, set to true in handleHover function
  const [hover, setHover] = useState(toggleHover);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleCopyToClipboard() {
    setError(false);
    setSuccess(false);

    if (!displayedContent || !rawContent) {
      setError(true);
      return;
    }

    copy(rawContent);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  function displayAddressOnHover() {
    const divStyle: CSSProperties = {
      position: 'fixed',
      left: position.x + 30,
      top: position.y - 30,
    };

    return (
      <p
        style={divStyle}
        className="relative bg-secondary z-10 top-2 text-f-primary pr-2 w-fit truncate pointer-events-none px-1 rounded"
      >
        {rawContent}
      </p>
    );
  }

  function handleHover(bool: boolean) {
    if (toggleHover === undefined) setHover(true);
    setIsHovered(bool);
  }

  return (
    <>
      {isHovered && hover ? displayAddressOnHover() : null}
      <div
        data-testid="clipboard-field"
        className={`flex flex-row items-center mas-body2 justify-between w-full
        h-12 px-3 rounded bg-secondary cursor-pointer ${customClass}`}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
        onClick={handleCopyToClipboard}
        {...rest}
      >
        <p className="text-f-primary pr-2 w-full truncate">
          {displayedContent}
        </p>
        {success ? (
          <FiCheckCircle className="w-6 h-6 text-s-success" />
        ) : (
          <FiCopy className="w-6 h-6 text-f-primary" />
        )}
      </div>
      {error || success ? (
        <InputMessage
          error={error ? errorMessage : ''}
          success={success ? successMessage : ''}
        />
      ) : null}
    </>
  );
}

export default Clipboard;
