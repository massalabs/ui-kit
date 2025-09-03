// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocalStorage } from '../../lib/util/hooks/useLocalStorage';

export type Theme = 'theme-light' | 'theme-dark' | 'theme-dark-v2';

interface ThemeProps {
  onSetTheme?: (theme: Theme) => void;
  storageKey: string;
  useV2Toggle?: boolean; // If true, uses handleClickV2 (light <-> dark-v2)
}

export function ThemeMode(props: ThemeProps) {
  let { onSetTheme, storageKey, useV2Toggle = false } = props;

  const [storedTheme, setStoredTheme] = useLocalStorage<string>(
    storageKey,
    'theme-dark',
  );
  const [theme, setTheme] = useState(storedTheme || 'theme-dark');

  function handleClick() {
    const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';

    setTheme(newTheme);
    setStoredTheme(newTheme);

    onSetTheme?.(newTheme);
  }

  function handleClickV2() {
    const newTheme = theme === 'theme-light' ? 'theme-dark-v2' : 'theme-light';

    setTheme(newTheme);
    setStoredTheme(newTheme);

    onSetTheme?.(newTheme);
  }

  const themeIcons = {
    'theme-dark': <FiSun className="h-8 w-8" />,
    'theme-dark-v2': <FiSun className="h-8 w-8" />,
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
      onClick={useV2Toggle ? handleClickV2 : handleClick}
    >
      <div className="flex justify-center items-center">
        {themeIcons[theme as keyof typeof themeIcons]}
      </div>
    </button>
  );
}
