// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useState } from 'react';
import { FiCopy, FiCheckCircle } from 'react-icons/fi';
import { InputMessage } from './../Input/Input';

interface ClipboardProps {
  rawContent: string;
  displayedContent?: string;
  error?: string;
  success?: string;
}

export function Clipboard(props: ClipboardProps) {
  const {
    error: errorMessage,
    success: successMessage,
    rawContent,
    displayedContent = rawContent,
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

    navigator.clipboard.writeText(rawContent);

    setSuccess(true);
  }

  return (
    <>
      <div
        data-testid="clipboard-field"
        className="flex flex-row items-center mas-body2 justify-between w-full
        h-12 px-3 rounded bg-secondary cursor-pointer"
        onClick={handleCopyToClipboard}
      >
        <u className="text-f-primary">{displayedContent}</u>
        {success ? (
          <FiCheckCircle className="text-s-success" size={24} />
        ) : (
          <FiCopy className="text-f-primary" size={24} />
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
