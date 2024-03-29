// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from 'react';
import { ComponentPropsWithoutRef, useState } from 'react';

export interface TabConfig {
  label: string;
  content: React.ReactNode | string;
  onClickTab?: () => void;
}

export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
  tabsConfig: TabConfig[];
  defaultIndex?: number | undefined;
}

export function Tabs(props: TabsProps) {
  const { tabsConfig, defaultIndex, ...rest } = props;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

  function handleClick(index: number) {
    const { onClickTab } = tabsConfig[index];

    setSelectedIndex(index);
    onClickTab?.();
  }

  return (
    <div data-testid="tabs-selector" {...rest}>
      <div className="w-full flex flex-row mb-2">
        {tabsConfig.map((tab: TabConfig, index: number) => (
          <div
            className={`default-tab default-tab-hover ${
              index === selectedIndex ? 'default-tab-active' : ''
            }`}
            key={`tab-${index}`}
            onClick={() => handleClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>
        {tabsConfig.map((tab: TabConfig, index: number) => (
          <section key={`tabpanel-${index}`} hidden={selectedIndex !== index}>
            {tab.content}
          </section>
        ))}
      </div>
    </div>
  );
}
