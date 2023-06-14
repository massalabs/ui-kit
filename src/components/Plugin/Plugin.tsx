// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ReactNode, cloneElement } from 'react';
import { IconContext } from 'react-icons/lib';

export interface PluginProps {
  preIcon: JSX.Element;
  topAction: JSX.Element;
  title: string;
  subtitle?: string;
  subtitleIcon?: JSX.Element;
  content: string | ReactNode[];
  variant?: string;
  customClass?: string;
}

interface classNames {
  [key: string]: string | object;
}

export function Plugin(props: PluginProps) {
  const { content } = props;

  return typeof content === 'string' || content instanceof String ? (
    <PluginStore {...props} />
  ) : (
    <PluginActions {...props} />
  );
}

export function PluginActions(props: PluginProps) {
  let {
    preIcon,
    topAction,
    title,
    subtitle,
    subtitleIcon,
    content,
    variant = 'primary',
    customClass,
    ...rest
  } = props;

  const CLASSES: classNames = {
    root: 'flex justify-center items-center',
    primary: {
      default: 'default-primary',
      preIcon: 'bg-tertiary text-f-secondary rounded-full h-10 w-10',
    },
    secondary: {
      default: 'default-secondary',
      preIcon: 'bg-neutral text-f-secondary rounded-full h-10 w-10',
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
      <div className="flex  justify-between items-center h-10 mb-3">
        {clonedPreIcon}
        {topAction}
      </div>
      <h5 className="mb-2 text-f-primary mas-menu-active truncate">{title}</h5>
      <div className="flex items-center gap-1 mb-3 text-f-primary mas-caption">
        {subtitle}
        {subtitleIcon}
      </div>
      <div className="flex justify-end space-x-1 gap-2">
        {(content as ReactNode[]).map((content: ReactNode, idx: number) => {
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
    subtitleIcon,
    content,
    variant = 'primary',
    customClass,
    ...rest
  } = props;

  const CLASSES: classNames = {
    root: 'flex justify-center items-center',
    primary: {
      default: 'default-primary',
      preIcon: 'bg-tertiary text-f-secondary rounded-full h-10 w-10',
    },
    secondary: {
      default: 'default-secondary',
      preIcon: 'bg-neutral text-f-secondary rounded-full h-10 w-10',
    },
  };

  const VARIANT = CLASSES[variant] as classNames;

  const clonedPreIcon = preIcon
    ? cloneElement(preIcon, {
        className: VARIANT.preIcon,
      })
    : null;

  const clonedTopAction = topAction
    ? cloneElement(topAction, {
        className: 'w-6 h-6 text-f-primary cursor-pointer',
      })
    : null;

  return (
    <div
      data-testid="plugin"
      className="w-80 h-44 p-4 bg-secondary rounded-lg shadow"
      {...rest}
    >
      <div className="flex justify-between items-center h-10 mb-3">
        {clonedPreIcon}
        {clonedTopAction}
      </div>
      <h5 className="mb-2 text-f-primary mas-menu-active truncate">{title}</h5>
      <p className="mb-3 text-f-primary mas-caption">{subtitle}</p>
      <div className="line-clamp-2 mas-body2 max-h-11 text-f-primary">
        {content}
      </div>
    </div>
  );
}
