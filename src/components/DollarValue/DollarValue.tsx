// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Tooltip } from '../Tooltip';
import { formatFTAmount, parseAmount } from '../../lib/util/parseAmount';

export interface DollarValueProps extends ComponentPropsWithoutRef<'p'> {
  dollarValue?: string;
  dollarValueError?: React.ReactNode;
  customClass?: string;
}

export function DollarValue(props: DollarValueProps) {
  const { dollarValue, dollarValueError, customClass = '', ...rest } = props;

  if (dollarValueError) {
    return (
      <div
        data-testid="dollar-value"
        className={`mas-menu ${customClass}`}
        {...rest}
      >
        <Tooltip body={dollarValueError}>
          <FiAlertTriangle className="text-s-warning" />
        </Tooltip>
      </div>
    );
  }

  let dollarValueFormatted = '';
  if (dollarValue !== undefined && dollarValue !== '') {
    const dollarValueBigInt = parseAmount(dollarValue, 2);
    const { amountFormattedPreview } = formatFTAmount(dollarValueBigInt, 2);
    dollarValueFormatted = amountFormattedPreview;
  }

  if (dollarValue !== undefined && dollarValue !== '') {
    return (
      <>
        <p
          data-testid="dollar-value"
          className={`mas-caption text-info ${customClass}`}
          {...rest}
        >
          ≈ ${dollarValueFormatted}
        </p>
      </>
    );
  }

  return null;
}
