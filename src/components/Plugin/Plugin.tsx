// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ReactNode, ComponentPropsWithoutRef, cloneElement } from 'react';
import { IconContext } from 'react-icons/lib';

export interface PluginProps extends ComponentPropsWithoutRef<'div'> {
  preIcon: JSX.Element;
  topAction: ReactNode;
  title: string;
  subtitle?: string;
  content?: string | ReactNode[];
  variant?: string;
  customClass?: string;
}

interface classNames {
  [key: string]: string | object;
}

export function Plugin(props: PluginProps) {
  const { content } = props;

  if (typeof content === 'string') {
    return <PluginStore {...props} />;
  }
  return <PluginStation {...props} />;
}

export function PluginStation(props: PluginProps) {
  let {
    preIcon,
    topAction,
    title,
    subtitle,
    content,
    variant = 'primary',
    customClass,
    ...rest
  } = props;

  const CLASSES: classNames = {
    root: 'flex justify-center items-center',
    primary: {
      default: 'default-primary',
      preIcon: 'bg-tertiary text-f-secondary rounded-full h-10 w-10 mb-6',
    },
    secondary: {
      default: 'default-secondary',
      preIcon: 'bg-neutral text-f-secondary rounded-full h-10 w-10 mb-6',
    },
  };

  const VARIANT = CLASSES[variant] as classNames;

  const clonedPreIcon = preIcon
    ? cloneElement(preIcon, {
        className: VARIANT.preIcon,
      })
    : null;

  return (
    <div
      data-testid="plugin"
      className="w-80 h-44 p-4 bg-secondary rounded-lg shadow"
      {...rest}
    >
      <div className="grid grid-cols-2 h-10 mb-3">
        <div className="flex flex-row justify-start">{clonedPreIcon}</div>
        <div className="flex flex-row justify-end">{topAction}</div>
      </div>
      <h5 className="mb-2 text-f-primary mas-menu-active truncate">{title}</h5>
      <p className="mb-3 text-f-primary mas-caption">{subtitle}</p>
      <div className="flex flex-row justify-end space-x-1 gap-2">
        {(content as ReactNode[])?.map((content: ReactNode, idx: number) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-center h-10 w-10 cursor-pointer "
            >
              <IconContext.Provider value={{ className: 'w-6 h-6' }}>
                {content}
              </IconContext.Provider>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PluginStore(props: PluginProps) {
  let {
    preIcon,
    topAction,
    title,
    subtitle,
    content,
    variant = 'primary',
    customClass,
    ...rest
  } = props;

  const CLASSES: classNames = {
    root: 'flex justify-center items-center',
    primary: {
      default: 'default-primary',
      preIcon: 'bg-tertiary text-f-secondary rounded-full h-10 w-10 mb-6',
    },
    secondary: {
      default: 'default-secondary',
      preIcon: 'bg-neutral text-f-secondary rounded-full h-10 w-10 mb-6',
    },
  };

  const VARIANT = CLASSES[variant] as classNames;

  const clonedPreIcon = preIcon
    ? cloneElement(preIcon, {
        className: VARIANT.preIcon,
      })
    : null;

  return (
    <div
      data-testid="plugin"
      className="w-80 h-44 p-4 bg-secondary rounded-lg shadow"
      {...rest}
    >
      <div className="grid grid-cols-2 h-10 mb-3">
        <div className="flex flex-row justify-start">{clonedPreIcon}</div>
        <div className="flex flex-row justify-end">
          <IconContext.Provider
            value={{ className: 'w-6 h-6 text-f-primary cursor-pointer' }}
          >
            {topAction}
          </IconContext.Provider>
        </div>
      </div>
      <h5 className="mb-2 text-f-primary mas-menu-active truncate">{title}</h5>
      <p className="mb-3 text-f-primary mas-caption">{subtitle}</p>
      <div className="h-12 text-f-primary overflow-hidden">{content}</div>
    </div>
  );
}
