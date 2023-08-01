import { ComponentPropsWithoutRef } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

interface ITokenData {
  logo: string;
  name: string;
  symbol: string;
  formattedBalance: string;
  rawBalance: string;
}

export interface ToggleProps extends ComponentPropsWithoutRef<'div'> {
  token: ITokenData;
  customClass?: string;
  onDelete?: () => void;
}

export function Token({ ...props }) {
  const {
    token: { logo, name, symbol, formattedBalance, rawBalance },
    onDelete,
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
        <Button variant="icon" onClick={onDelete}>
          <FiTrash />
        </Button>
      </div>
    </div>
  );
}
