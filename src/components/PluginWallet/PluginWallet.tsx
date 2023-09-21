// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ReactNode } from 'react';
import { Button } from '../Button';
import { FiArrowUpRight } from 'react-icons/fi';
import { Spinner } from '../Spinner';

export interface PluginWalletProps {
  isActive: boolean;
  isLoading: boolean;
  title: string;
  status?: string;
  iconActive: ReactNode;
  iconInactive: ReactNode;
  onClickActive: () => void;
  onClickInactive: () => void;
}

export interface MSPluginProps {
  title: string;
  iconActive?: ReactNode;
  onClickActive?: () => void;
  iconInactive?: ReactNode;
  onClickInactive?: () => void;
}

export function ActivePlugin(props: MSPluginProps) {
  const { title, iconActive, onClickActive } = props;

  return (
    <>
      {iconActive}
      <div className="w-full py-6 text-f-primary bg-secondary flex flex-col items-center">
        <div className="px-4 py-2 lg:h-14 mas-title text-center">
          <p className="text-xl sm:text-4xl lg:text-2xl 2xl:text-4xl">
            {title}
          </p>
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

export function InactivePlugin(props: MSPluginProps) {
  const { title, iconInactive, onClickInactive } = props;

  return (
    <>
      {iconInactive}
      <div className="w-full py-6 text-f-primary bg-secondary flex flex-col items-center">
        <div className="w-4/5 px-4 py-2 mas-buttons lg:h-14 flex items-center justify-center">
          <p className="text-center">{`${title} is not installed in your station`}</p>
        </div>
        <div className="w-4/5 px-4 py-2">
          <Button onClick={onClickInactive}>Install</Button>
        </div>
      </div>
    </>
  );
}

export function CrashedPlugin(props: MSPluginProps) {
  const { title, iconActive } = props;

  return (
    <>
      {iconActive}
      <div className="w-full py-6 text-f-primary bg-secondary flex flex-col items-center">
        <div className="w-4/5 px-4 py-2 mas-buttons lg:h-14 flex items-center justify-center">
          <p className="text-center">{`${title} encountered unexepted error`}</p>
        </div>
      </div>
    </>
  );
}

export function LoadingPlugin(props: MSPluginProps) {
  const { title, iconInactive } = props;

  return (
    <>
      {iconInactive}
      <div className="w-full py-6 text-f-primary bg-secondary flex flex-col items-center">
        <div className="w-4/5 px-4 py-2 mas-buttons lg:h-14 flex items-center justify-center">
          <p className="text-center">{`${title} installation`}</p>
        </div>
        <div className="w-4/5 px-4 py-2">
          <Button disabled={true}>
            <Spinner variant="button" />
          </Button>
        </div>
      </div>
    </>
  );
}

export function PluginWallet(props: PluginWalletProps) {
  const {
    isActive,
    isLoading,
    status,
    title,
    iconActive,
    iconInactive,
    onClickActive,
    onClickInactive,
  } = props;

  const displayPlugin = () => {
    if (isLoading) {
      return <LoadingPlugin title={title} iconInactive={iconInactive} />;
    }
    if (!isActive) {
      return (
        <InactivePlugin
          title={title}
          iconInactive={iconInactive}
          onClickInactive={onClickInactive}
        />
      );
    }
    if (status && status === 'Crashed') {
      return <CrashedPlugin title={title} iconActive={iconActive} />;
    }
    return (
      <ActivePlugin
        title={title}
        iconActive={iconActive}
        onClickActive={onClickActive}
      />
    );
  };

  return (
    <div data-testid="plugin-wallet" className="w-full flex flex-col">
      {displayPlugin()}
    </div>
  );
}
