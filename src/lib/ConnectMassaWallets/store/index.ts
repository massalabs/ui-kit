import { WalletsListener } from '@massalabs/wallet-provider';
import { create } from 'zustand';

import accountStore, { AccountStoreState } from './accountStore';

export const useAccountStore = create<AccountStoreState>((set, get) => ({
  ...accountStore(set, get),
}));

async function initAccountStore() {
  new WalletsListener(4_000).subscribe((wallets) => {
    useAccountStore.getState().setWallets(wallets);
  });
}

async function initializeStores() {
  await initAccountStore();
}

initializeStores();
