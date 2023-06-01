// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { ComponentPropsWithoutRef, useMemo } from 'react';

import { identicon } from 'minidenticons';

export interface IdenticonProps extends ComponentPropsWithoutRef<'img'> {
  username: string;
  size?: number;
  saturation?: number;
  lightness?: number;
  customClass?: string;
}

export function Identicon(props: IdenticonProps) {
  const {
    username,
    size = 64,
    saturation,
    lightness,
    customClass,
    ...rest
  } = props;

  const svgURI = useMemo(
    () =>
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(identicon(username, saturation, lightness)),
    [username, saturation, lightness],
  );

  return (
    <img
      data-testid="identicon"
      className={`bg-neutral rounded-full ${customClass}`}
      src={svgURI}
      alt={username}
      width={size.toString()}
      height={size.toString()}
      {...rest}
    />
  );
}
