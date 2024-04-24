// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';
import { InputMessage } from '../Input';
import { NumericFormat } from 'react-number-format';

function MAS(props: IMoneyProps) {
  const {
    error,
    warning,
    success,
    disable,
    variant = 'MAS',
    customClass,
    ...rest
  } = props;

  const disabledClass = disable ? 'border-0' : '';
  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass =
    errorClass || warningClass || successClass || disabledClass;

  return (
    <>
      <NumericFormat
        className={`w-full default-input h-12 pl-3 pr-10 mb-1 ${messageClass} ${customClass}`}
        data-testid="money-field"
        decimalScale={9}
        allowNegative={false}
        suffix={' MAS'}
        disabled={disable}
        thousandSeparator=","
        {...rest}
      />
      <InputMessage error={error} warning={warning} />
    </>
  );
}

function NMAS(props: IMoneyProps) {
  const { error, warning, success, disable, variant = 'MAS', ...rest } = props;

  const disabledClass = disable ? 'border-0' : '';
  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass =
    errorClass || warningClass || successClass || disabledClass;

  return (
    <>
      <NumericFormat
        className={`w-full default-input h-12 pl-3 pr-10 mb-1 ${messageClass}`}
        data-testid="money-field"
        decimalScale={0}
        allowNegative={false}
        suffix={' nMAS'}
        disabled={disable}
        thousandSeparator=","
        {...rest}
      />
      <InputMessage error={error} warning={warning} />
    </>
  );
}

export interface IMoneyProps
  extends ComponentPropsWithoutRef<typeof NumericFormat> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  disable?: boolean;
  variant?: 'nMAS' | 'MAS';
  customClass?: string;
}

export function Money(props: IMoneyProps) {
  const { variant = 'MAS' } = props;

  const isNMas = variant === 'nMAS';

  return (
    <div className="flex-row">
      <div className="grid-cols-2">
        <div className="inline h-12">
          {isNMas ? <NMAS {...props} /> : <MAS {...props} />}
        </div>
      </div>
    </div>
  );
}
