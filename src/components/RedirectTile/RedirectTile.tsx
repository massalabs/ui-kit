import { ReactNode } from 'react';
import { openInNewTab } from '../../util/utils';

export interface RedirectTileProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  logo?: ReactNode;
  variant?: 'secondary' | 'primary';
  customClass?: string;
  customHeaderClass?: string;
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
    customClass,
    customHeaderClass,
    title,
    subtitle,
    description,
    logo,
    customSize,
    size = 'md',
    url,
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
      <div className={`flex items-center gap-4 ${customHeaderClass}`}>
        {logo}
        <div className="mas-menu-active">{title}</div>
        {subtitle && <div className="mas-caption">{subtitle}</div>}
      </div>
      <div className="mas-body">{description}</div>
    </div>
  );
}
