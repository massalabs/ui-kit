// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { ComponentPropsWithoutRef } from 'react';

import { NumberFormatValues, NumericFormat } from 'react-number-format';

interface InlineInputProps
  extends ComponentPropsWithoutRef<typeof NumericFormat> {
  value: string;
  disabled?: boolean;
  suffix?: string;
  onValueChange?: (event: NumberFormatValues) => void;
  customClass?: string;
}

export function InlineInput(props: InlineInputProps) {
  const { disabled, value, onValueChange, suffix, customClass, ...rest } =
    props;

  const underline = disabled ? '' : 'underline';

  const suffixAttr = suffix ? suffix : ' MAS';

  return (
    <NumericFormat
      data-testid="inline-input"
      className={`default-input border-none focus:border-none rounded-none
        text-right bg-primary underline-offset-4 ${underline} ${customClass}`}
      decimalScale={9}
      allowNegative={false}
      suffix={suffixAttr}
      disabled={disabled}
      thousandSeparator=","
      value={value}
      onValueChange={onValueChange}
      {...rest}
    />
  );
}
