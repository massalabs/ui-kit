// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { DollarValue } from '../DollarValue';
import { formatFTAmount } from '../../lib/util/parseAmount';

export interface TokenProps extends ComponentPropsWithoutRef<'div'> {
  logo?: React.ReactNode;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  dollarValue?: string;
  dollarValueError?: React.ReactNode;
  customClass?: string;
  disable?: boolean;
  onDelete?: () => void;
}

export function Token(props: TokenProps) {
  const {
    logo,
    name,
    symbol,
    decimals,
    balance,
    dollarValue,
    dollarValueError,
    customClass = '',
    disable,
    onDelete,
    ...rest
  } = props;

  let formattedBalance: string | undefined;
  let rawBalance: string | undefined;
  let bigintBalance = BigInt(0);
  if (balance !== '') {
    bigintBalance = BigInt(balance);
    const { amountFormattedPreview, amountFormattedFull } = formatFTAmount(
      bigintBalance,
      decimals,
    );
    rawBalance = amountFormattedFull;
    formattedBalance = amountFormattedPreview;
  } else {
    formattedBalance = undefined;
    rawBalance = undefined;
  }

  return (
    <div
      data-testid="token"
      className={`w-full flex justify-between items-center text-neutral ${customClass}`}
      {...rest}
    >
      <div className="flex w-fit gap-2 items-center">
        {logo}
        <div className="flex flex-col">
          <p className="mas-menu-active">{`${name} (${symbol})`} </p>
          <div className="flex items-center gap-1">
            {formattedBalance ? (
              <>
                <Tooltip body={rawBalance} customClass="p-0" />
                <p className="mas-menu">{formattedBalance}</p>
              </>
            ) : null}
            <div className="flex items-center gap-1">
              <DollarValue
                dollarValue={dollarValue}
                dollarValueError={dollarValueError}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {disable ? null : (
          <Button variant="icon" onClick={onDelete}>
            <FiTrash2 size={24} />
          </Button>
        )}
      </div>
    </div>
  );
}
