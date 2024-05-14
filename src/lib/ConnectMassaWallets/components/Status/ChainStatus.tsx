// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Connected } from './Connected';
import { Disconnected } from './Disconnected';
import { useAccountStore } from '../../store';

export function ChainStatus() {
  const { connectedAccount, currentProvider } = useAccountStore();

  const connected = !!connectedAccount && !!currentProvider;

  return <>{connected ? <Connected /> : <Disconnected />}</>;
}
