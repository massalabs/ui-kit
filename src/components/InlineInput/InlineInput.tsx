// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { NumberFormatValues, NumericFormat } from 'react-number-format';

interface InlineInputProps {
  name: string;
  disabled?: boolean;
  value: string;
  onValueChange?: (event: NumberFormatValues) => void;
}

export function InlineInput(props: InlineInputProps) {
  const { name, disabled, value, onValueChange } = props;
  const underline = disabled ? '' : 'underline';

  return (
    <NumericFormat
      className={`text-right bg-primary mas-caption underline-offset-4 ${underline}`}
      name={name}
      decimalScale={9}
      allowNegative={false}
      disabled={disabled}
      thousandSeparator=","
      value={value}
      onValueChange={onValueChange}
      suffix=" MAS"
    />
  );
}
