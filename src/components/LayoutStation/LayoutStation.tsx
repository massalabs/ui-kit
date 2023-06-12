// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import { ThemeMode } from '../ThemeMode';
import { StationLogo } from '../Icons/Svg/Massa/StationLogo';
import { useLocalStorage } from './../../util/useLocalStorage';

export interface LayoutStationProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  navigator?: Navigator;
  logo?: ReactNode;
  onSetTheme?: () => void;
  customClass?: string;
  overwrittenTheme?: string;
}

export function LayoutStation({ ...props }) {
  const { children, navigator, overwrittenTheme, onSetTheme, customClass } =
    props;

  const [storedTheme] = useLocalStorage<string>('massa-station-theme', 'light');
  const [selectedTheme, setSelectedTheme] = useState(
    overwrittenTheme || storedTheme || 'light',
  );

  function handleSetTheme(theme: string) {
    setSelectedTheme(theme);

    onSetTheme?.(theme);
  }

  return (
    <div
      data-testid="layout-station"
      className={`bg-primary h-screen px-20 pt-12 pb-8 ${customClass}`}
    >
      <div className="grid grid-cols-3">
        <div className="flex flex-row justify-start">
          <StationLogo theme={selectedTheme} />
        </div>
        <div className="flex flex-row justify-center">
          {navigator && <div className="flex-row-reversed">{navigator}</div>}
        </div>
        <div className="flex flex-row justify-end">
          <ThemeMode onSetTheme={handleSetTheme} />
        </div>
      </div>
      {children}
    </div>
  );
}
