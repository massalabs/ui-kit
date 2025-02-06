// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { DollarValue } from '../DollarValue';
import { formatAmount } from '../../lib/util/parseAmount';
import { maskAddress } from '../../lib/massa-react/utils/index';
import { Clipboard } from '../Clipboard';

export interface TokenProps extends ComponentPropsWithoutRef<'div'> {
  logo?: React.ReactNode;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  dollarValue?: string;
  dollarValueError?: React.ReactNode;
  customClass?: string;
  address?: string;
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
    address,
    disable,
    onDelete,
    ...rest
  } = props;

  let formattedBalance: string | undefined;
  let rawBalance: string | undefined;
  let bigintBalance = BigInt(0);
  if (balance !== '') {
    bigintBalance = BigInt(balance);
    const { preview, full } = formatAmount(bigintBalance, decimals);
    rawBalance = full;
    formattedBalance = preview;
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
                <Tooltip body={rawBalance} />
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
      <div className="flex items-center gap-2">
        {address && (
          <Clipboard
            rawContent={address}
            displayedContent={maskAddress(address)}
          />
        )}
        {disable ? null : (
          <Button variant="icon" onClick={onDelete}>
            <FiTrash2 size={24} />
          </Button>
        )}
      </div>
    </div>
  );
}
