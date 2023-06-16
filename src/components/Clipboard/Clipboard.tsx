// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

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
}

export function Clipboard(props: ClipboardProps) {
  const {
    error: errorMessage,
    success: successMessage,
    rawContent,
    displayedContent = rawContent,
    customClass,
    ...rest
  } = props;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleCopyToClipboard() {
    setError(false);
    setSuccess(false);

    if (!displayedContent || !rawContent) {
      setError(true);
      return;
    }

    //
    copy(rawContent);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <>
      <div
        data-testid="clipboard-field"
        className={`flex flex-row items-center mas-body2 justify-between w-full
        h-12 px-3 rounded bg-secondary cursor-pointer ${customClass}`}
        onClick={handleCopyToClipboard}
        {...rest}
      >
        <u className="text-f-primary pr-2 w-full truncate">
          {displayedContent}
        </u>
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
