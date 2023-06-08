// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocalStorage } from '../../util/useLocalStorage';
import { ComponentPropsWithoutRef } from 'react';

interface ThemeProps extends ComponentPropsWithoutRef<'div'> {
  onSetTheme?: (theme: string) => void;
}

export function ThemeMode(props: ThemeProps) {
  let { onSetTheme } = props;

  const [theme, setTheme] = useLocalStorage<string>(
    'massa-station-theme',
    'dark',
  );

  function handleClick() {
    setTheme(theme === 'dark' ? 'light' : 'dark');

    onSetTheme?.(theme);
  }

  const themeIcons = {
    dark: <FiSun className="h-8 w-8" />,
    light: <FiMoon className="h-8 w-8" />,
  };

  return (
    <button
      data-testid="theme-mode"
      className={`bg-primary text-f-primary p-3 rounded-lg cursor-pointer 
                  flex flex-row items-center justify-center
                  hover:bg-tertiary
                  active:bg-secondary
                  h-12 w-12`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        {themeIcons[theme as keyof typeof themeIcons]}
      </div>
    </button>
  );
}
