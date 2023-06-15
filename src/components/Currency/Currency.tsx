// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef } from 'react';
import { InputMessage } from './../Input/Input';
import CurrencyInput from 'react-currency-input-field';

function MAS(props: ICurrencyProps) {
  const { error, warning, variant = 'MAS', ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const messageClass = errorClass || warningClass;

  return (
    <>
      <CurrencyInput
        className={`w-full default-input mb-1 ${messageClass}`}
        data-testid="currency-field"
        decimalsLimit={9}
        disableAbbreviations={true}
        allowNegativeValue={false}
        suffix={' MAS'}
        intlConfig={{ locale: 'en-US' }}
        {...rest}
      />
      <InputMessage error={error} warning={warning} />
    </>
  );
}

function NMAS(props: ICurrencyProps) {
  const { error, warning, variant = 'MAS', ...rest } = props;

  const errorClass = error ? 'border-s-error' : '';
  const warningClass = warning ? 'border-s-warning' : '';
  const messageClass = errorClass || warningClass;

  return (
    <>
      <CurrencyInput
        className={`w-full default-input mb-1 ${messageClass}`}
        data-testid="currency-field"
        allowDecimals={false}
        disableAbbreviations={true}
        allowNegativeValue={false}
        suffix={' nMAS'}
        disableGroupSeparators={true}
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
