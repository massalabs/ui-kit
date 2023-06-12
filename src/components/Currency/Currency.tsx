// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';
import { InputMessage } from './../Input/Input';
import CurrencyInput from 'react-currency-input-field';

export interface CurrencyProps extends ComponentPropsWithoutRef<'input'> {
  error?: string | undefined;
  warning?: string | undefined;
}

export function Currency(props: CurrencyProps) {
  const { error, warning, ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const messageClass = errorClass || warningClass;

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          {/* eslint-disable */}
          {/* @ts-ignore */}
          <CurrencyInput
            className={`w-full default-input mb-1 ${messageClass}`}
            data-testid="currency-field"
            {...rest}
          />
          <InputMessage error={error} warning={warning} />
        </div>
      </div>
    </div>
  );
}
