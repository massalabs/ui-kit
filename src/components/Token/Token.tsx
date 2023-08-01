// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

interface ITokenData {
  logo: string;
  name: string;
  symbol: string;
  formattedBalance: string;
  rawBalance: string;
}

export interface TokenProps extends ComponentPropsWithoutRef<'div'> {
  token: ITokenData;
  customClass?: string;
  disable?: boolean;
  onDelete?: () => void;
}

export function Token({ ...props }) {
  const {
    token: { logo, name, symbol, formattedBalance, rawBalance },
    onDelete,
    disable,
    customClass,
    ...rest
  } = props;
  return (
    <div
      data-testid="token"
      className={`w-full flex justify-between items-center text-neutral ${customClass}`}
      {...rest}
    >
      <div className="flex w-fit gap-2 items-center">
        {logo}
        <div className="flex flex-col ">
          <p className="mas-menu-active">{`${name} (${symbol})`} </p>
          <span className="flex items-center gap-2">
            <p className="mas-menu">{formattedBalance}</p>
            <Tooltip content={rawBalance} />
          </span>
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
