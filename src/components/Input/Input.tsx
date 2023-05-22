// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

import { ComponentPropsWithoutRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: string | undefined;
  warning?: string | undefined;
}

export function Input(props: InputProps) {
  const { error, warning, ...rest } = props;

  const errorClass = error ? "border-s-error" : "";
  const warningClass = warning ? "border-s-warning" : "";
  const messageClass = errorClass || warningClass;

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="input-field"
            className={`w-full default-input mb-1 ${messageClass}`}
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

  const errorClass = error ? "mas-h3 text-s-error" : "";
  const warningClass = warning ? "mas-h3 text-s-warning" : "";

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
