// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Tag, tagTypes } from '../../../../components';
import { useAccountStore } from '../../store';

export function Network() {
  const { network } = useAccountStore();

  if (!network) return;

  return <NetworkTag networkName={network.name} />;
}

export function NetworkTag({ networkName }: { networkName: string }) {
  return <Tag type={tagTypes.info}>{networkName}</Tag>;
}
