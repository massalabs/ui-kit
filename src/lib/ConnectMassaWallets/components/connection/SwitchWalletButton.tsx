// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import Intl from '../../i18n';

export default function SwitchWalletButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row just items-center hover:cursor-pointer gap-2 w-fit"
    >
      <p
        className="mas-caption underline 
        text-f-primary dark:text-f-primary 
        hover:text-f-tertiary dark:hover:text-f-tertiary"
      >
        {Intl.t('connect-wallet.card-destination.switch')}
      </p>
    </div>
  );
}
