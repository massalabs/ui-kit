// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocalStorage } from '../../util/useLocalStorage';

interface ThemeProps {
  onSetTheme?: (theme: string) => void;
}

export function ThemeMode(props: ThemeProps) {
  let { onSetTheme } = props;

  const [storedTheme, setStoredTheme] = useLocalStorage<string>(
    'massa-station-theme',
    'theme-dark',
  );
  const [theme, setTheme] = useState(storedTheme || 'theme-dark');

  function handleClick() {
    const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';

    setTheme(newTheme);
    setStoredTheme(newTheme);

    onSetTheme?.(newTheme);
  }

  const themeIcons = {
    'theme-dark': <FiSun className="h-8 w-8" />,
    'theme-light': <FiMoon className="h-8 w-8" />,
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
