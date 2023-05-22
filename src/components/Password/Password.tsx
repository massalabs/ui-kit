// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

import { useState, ComponentPropsWithoutRef } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { InputMessage } from "../index";

export interface PasswordProps extends ComponentPropsWithoutRef<"input"> {
  error?: string | undefined;
  warning?: string | undefined;
}

export function Password(props: PasswordProps) {
  const { error, warning, ...rest } = props;

  const errorClass = error ? "border-s-error" : "";
  const warningClass = warning ? "border-s-warning" : "";
  const messageClass = errorClass || warningClass;
  const iconClass = `w-5 h-5 inline-block align-text-bottom text-neutral`;

  let open = {
    type: "text",
    icon: (
      <div data-testid="icon-open">
        <FiEyeOff className={iconClass} />
      </div>
    ),
  };

  let close = {
    type: "password",
    icon: (
      <div data-testid="icon-close">
        <FiEye className={iconClass} />
      </div>
    ),
  };

  const [{ type, icon }, setType] = useState(close);

  function toggleIcon() {
    return type === "password" ? setType(open) : setType(close);
  }

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          <input
            data-testid="password-input"
            className={`w-full default-input mb-1 ${messageClass}`}
            type={type}
            {...rest}
          />
        </div>
        <div className="inline -ml-9">
          <button
            className="w-8 h-8 bg-transparent"
            data-testid="password-icon"
            onClick={toggleIcon}
          >
            {icon}
          </button>
        </div>
        <InputMessage error={error} warning={warning} />
      </div>
    </div>
  );
}
