// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Clipboard } from '../../../components';
import { maskAddress } from '../../massa-react/utils';
import { useAccountStore } from '../store';

interface ConnectedAccountProps {
  maskLength?: number;
}

export function ConnectedAccount(props: ConnectedAccountProps) {
  const { maskLength } = props;
  const { connectedAccount } = useAccountStore();

  return (
    <div className="flex flex-col w-full">
      <Clipboard
        customClass="h-14 rounded-lg text-center !mas-body"
        rawContent={connectedAccount?.address ?? ''}
        displayedContent={maskAddress(
          connectedAccount?.address ?? '',
          maskLength ?? 15,
        )}
      />
    </div>
  );
}
