// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Disconnected } from '../Status/Disconnected';
import { useAccountStore } from '../../store';
import { Connected } from '../Status/Connected';

export function ChainStatus() {
  const { connectedAccount, currentWallet } = useAccountStore();

  const connected = !!connectedAccount && !!currentWallet;

  return <>{connected ? <Connected /> : <Disconnected />}</>;
}
