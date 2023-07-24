// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';
import { InputMessage } from '../Input';
import CurrencyInput from 'react-currency-input-field';

function MAS(props: ICurrencyProps) {
  const { error, warning, success, disable, variant = 'MAS', ...rest } = props;

  const disabledClass = disable ? 'border-0' : '';
  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass =
    errorClass || warningClass || successClass || disabledClass;

  return (
    <>
      <CurrencyInput
        className={`w-full default-input h-12 pl-3 pr-10 mb-1 ${messageClass}`}
        data-testid="currency-field"
        decimalsLimit={9}
        disableAbbreviations={true}
        allowNegativeValue={false}
        suffix={' MAS'}
        intlConfig={{ locale: 'en-US' }}
        disabled={disable}
        {...rest}
      />
      <InputMessage error={error} warning={warning} />
    </>
  );
}

function NMAS(props: ICurrencyProps) {
  const { error, warning, success, disable, variant = 'MAS', ...rest } = props;

  const disabledClass = disable ? 'border-0' : '';
  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const successClass = success ? 'border-s-success' : '';
  const messageClass =
    errorClass || warningClass || successClass || disabledClass;

  return (
    <>
      <CurrencyInput
        className={`w-full default-input h-12 pl-3 pr-10 mb-1 ${messageClass}`}
        data-testid="currency-field"
        allowDecimals={false}
        disableAbbreviations={true}
        allowNegativeValue={false}
        suffix={' nMAS'}
        disableGroupSeparators={true}
        disabled={disable}
        {...rest}
      />
      <InputMessage error={error} warning={warning} />
    </>
  );
}

export interface ICurrencyProps
  extends ComponentPropsWithoutRef<typeof CurrencyInput> {
  error?: string | undefined;
  warning?: string | undefined;
  success?: string | undefined;
  disable?: boolean;
  variant?: 'nMAS' | 'MAS';
}

export function Currency(props: ICurrencyProps) {
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
