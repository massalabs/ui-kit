import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { openInNewTab } from '../../util/utils';

export interface RedirectTileProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'secondary' | 'primary';
  customClass?: string;
  header?: ReactNode;
  body: ReactNode;
  size?: 'md' | 'lg' | 'cs';
  customSize?: string;
  url: string;
}

interface Classes {
  [key: string]: string | object;
}

const classes: Classes = {
  primary: 'default-primary',
  secondary: 'default-secondary',
};

export function RedirectTile(props: RedirectTileProps) {
  const {
    variant = 'primary',
    header,
    body,
    customClass,
    customSize,
    size = 'md',
    url,
    children,
    ...rest
  } = props;

  const sizes = {
    md: 'w-[200px] h-[200px]',
    lg: 'w-[400px] h-[400px]',
    cs: customSize,
  };

  function handleRedirect() {
    if (!url) return;
    openInNewTab(url);
  }

  return (
    <div
      onClick={() => handleRedirect()}
      data-testid="RedirectTile"
      className={`flex flex-col gap-6 justify-center px-4 rounded-2xl 
      hover:cursor-pointer border ${sizes[size]} ${classes[variant]} ${customClass}`}
      {...rest}
    >
      {header && header}
      {body}
    </div>
  );
}
