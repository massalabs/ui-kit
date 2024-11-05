import { create } from 'zustand';
import { Network, Provider } from '@massalabs/massa-web3';
import { Wallet, WalletName } from '@massalabs/wallet-provider';

export interface AccountStoreState {
  connectedAccount?: Provider;
  accounts?: Provider[];
  currentWallet?: Wallet;
  wallets: Wallet[];
  isFetching: boolean;
  accountObserver?: {
    unsubscribe: () => void;
  };
  networkObserver?: {
    unsubscribe: () => void;
  };
  network?: Network;

  setCurrentWallet: (wallet?: Wallet, account?: Provider) => Promise<void>;
  setWallets: (wallets: Wallet[]) => void;
  setConnectedAccount: (account?: Provider) => void;
  setCurrentNetwork: (network: Network) => void;
}

export const useAccountStore = create<AccountStoreState>((set, get) => ({
  accounts: undefined,
  network: undefined,
  connectedAccount: undefined,
  accountObserver: undefined,
  networkObserver: undefined,
  currentWallet: undefined,
  wallets: [],
  isFetching: false,

  setCurrentWallet: async (wallet?: Wallet, account?: Provider) => {
    set({ isFetching: true });
    if (!wallet) {
      resetAll(get, set);
      return;
    }

    if (get().currentWallet?.name() !== wallet.name()) resetObservers(get, set);

    if (wallet.name() === WalletName.Bearby) {
      try {
        await setupBearbyWallet(wallet, set, get);
      } catch (error) {
        return;
      }
    }

    if (!get().networkObserver) {
      const networkObserver = wallet.listenNetworkChanges(async () => {
        get().setCurrentNetwork(await wallet.networkInfos());
      });
      set({ networkObserver });
    }

    set({ currentWallet: wallet });
    const network = await wallet.networkInfos();
    get().setCurrentNetwork(network);
    const accounts = await wallet.accounts();
    set({ accounts });
    get().setConnectedAccount(account || accounts[0]);

    set({ isFetching: false });
  },

  setWallets: (wallets: Wallet[]) => {
    set({ wallets });
    if (!wallets.some((p) => p.name() === get().currentWallet?.name())) {
      resetWallet(set);
    }
  },

  setConnectedAccount: (connectedAccount?: Provider) => {
    set({ connectedAccount });
  },

  setCurrentNetwork: (network: Network) => {
    if (network === get().network) return;
    set({ network });
  },
}));

function resetObservers(
  get: () => AccountStoreState,
  set: (partial: Partial<AccountStoreState>) => void,
) {
  get().accountObserver?.unsubscribe();
  get().networkObserver?.unsubscribe();
  set({ accountObserver: undefined, networkObserver: undefined });
}

function resetWallet(set: (partial: Partial<AccountStoreState>) => void) {
  set({
    accounts: undefined,
    connectedAccount: undefined,
    currentWallet: undefined,
    network: undefined,
  });
}

function resetAll(
  get: () => AccountStoreState,
  set: (partial: Partial<AccountStoreState>) => void,
) {
  resetObservers(get, set);
  resetWallet(set);
  set({ isFetching: false });
}

async function setupBearbyWallet(
  wallet: Wallet,
  set: (partial: Partial<AccountStoreState>) => void,
  get: () => AccountStoreState,
) {
  await wallet.connect();

  const observer = wallet.listenAccountChanges(async (newAddress: string) => {
    const { connectedAccount, currentWallet, setConnectedAccount } = get();

    if (!currentWallet || !connectedAccount) return;

    if (newAddress !== connectedAccount.address) {
      const accounts = await currentWallet.accounts();
      const newAccount = accounts.find((acc) => acc.address === newAddress);
      setConnectedAccount(newAccount);
    }
  });

  set({ accountObserver: observer });
}
