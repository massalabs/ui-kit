// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode } from 'react';
import { Button } from '../Button';
import { FiArrowUpRight } from 'react-icons/fi';

export interface PluginWalletProps {
  isActive: boolean;
  title: string;
  iconActive: ReactNode;
  iconInactive: ReactNode;
  onClickActive: () => void;
  onClickInactive: () => void;
}

export interface ActivePluginProps {
  title: string;
  iconActive: ReactNode;
  onClickActive: () => void;
}

export interface InactivePluginProps {
  title: string;
  iconInactive: ReactNode;
  onClickInactive: () => void;
}

export function ActivePlugin(props: ActivePluginProps) {
  const { title, iconActive, onClickActive } = props;

  return (
    <>
      {iconActive}
      <div className="w-full py-6 text-f-primary bg-secondary flex flex-col items-center">
        <div className="w-4/5 px-4 py-2 text-center mas-subtitle min-[450px]:mas-title">
          {title}
        </div>
        <div className="w-4/5 px-4 py-2">
          <Button onClick={onClickActive} preIcon={<FiArrowUpRight />}>
            Launch
          </Button>
        </div>
      </div>
    </>
  );
}

export function InactivePlugin(props: InactivePluginProps) {
  const { title, iconInactive, onClickInactive } = props;

  return (
    <>
      {iconInactive}
      <div className="w-full py-6 text-f-primary bg-secondary flex flex-col items-center">
        <div className="w-4/5 px-4 py-2 text-center mas-buttons">
          {`${title} is not installed in your station`}
        </div>
        <div className="w-4/5 px-4 py-2">
          <Button onClick={onClickInactive}>Install</Button>
        </div>
      </div>
    </>
  );
}

export function PluginWallet(props: PluginWalletProps) {
  const {
    isActive,
    title,
    iconActive,
    iconInactive,
    onClickActive,
    onClickInactive,
  } = props;

  return (
    <div data-testid="plugin-wallet" className="w-full flex flex-col">
      {isActive ? (
        <ActivePlugin
          title={title}
          iconActive={iconActive}
          onClickActive={onClickActive}
        />
      ) : (
        <InactivePlugin
          title={title}
          iconInactive={iconInactive}
          onClickInactive={onClickInactive}
        />
      )}
    </div>
  );
}
