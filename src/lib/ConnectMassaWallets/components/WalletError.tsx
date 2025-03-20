// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

interface WalletErrorProps {
  description: string;
  link: string;
  linkLabel: string;
}

export function WalletError(props: WalletErrorProps) {
  const { description, link, linkLabel } = props;

  return (
    <div className="flex flex-col space-y-4 text-f-primary dark:text-f-primary">
      {description}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-f-primary dark:text-f-primary underline hover:text-f-tertiary dark:hover:text-f-tertiary"
      >
        {linkLabel}
      </a>
    </div>
  );
}
