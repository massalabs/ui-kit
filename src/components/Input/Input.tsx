// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef, ChangeEvent, cloneElement } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: string | undefined;
  warning?: string | undefined;
  icon?: JSX.Element;
  customClass?: string;
  onClickIcon?: () => void;
}

export function Input(props: InputProps) {
  const { icon } = props;

  return icon ? <IconInput {...props} /> : <RawInput {...props} />;
}

export function IconInput(props: InputProps) {
  const { error, warning, icon, onClickIcon, customClass, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const messageClass = errorClass || warningClass;
  const clonedIcon = icon
    ? cloneElement(icon, {
        className: 'w-5 h-5 inline-block align-text-bottom text-neutral',
      })
    : null;

  function handleOnClick(e: ChangeEvent<unknown>) {
    e.preventDefault();

    onClickIcon?.();
  }

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="password-input"
            className={`w-full default-input mb-1 ${messageClass} ${customClass}`}
            type="text"
            {...rest}
          />
        </div>
        <div className="inline -ml-10">
          <button
            className="w-10 h-10 bg-transparent"
            data-testid="password-icon"
            onClick={handleOnClick}
          >
            {clonedIcon}
          </button>
        </div>
        <InputMessage error={error} warning={warning} />
      </div>
    </div>
  );
}

export function RawInput(props: InputProps) {
  const { error, warning, customClass, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const messageClass = errorClass || warningClass;

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="input-field"
            className={`w-full default-input mb-1 ${messageClass} ${customClass}`}
            type="text"
            {...rest}
          />
          <InputMessage error={error} warning={warning} />
        </div>
      </div>
    </div>
  );
}

export function InputMessage(props: InputProps) {
  const { error, warning } = props;

  const errorClass = error ? 'mas-h3 text-s-error' : '';
  const warningClass = warning ? 'mas-h3 text-s-warning' : '';

  const messageClass = errorClass || warningClass;
  const hasMessage = error || warning;

  if (hasMessage) {
    return (
      <div data-testid="input-field-message" className={messageClass}>
        {error || warning}
      </div>
    );
  } else {
    return null;
  }
}
