import { WalletsListener } from '@massalabs/wallet-provider';
import { useAccountStore } from './accountStore';
export { useAccountStore } from './accountStore';

export async function initAccountStore() {
  new WalletsListener(4_000).subscribe((wallets) => {
    useAccountStore.getState().setWallets(wallets);
  });
}

async function initializeStores() {
  await initAccountStore();
}

initializeStores();
