import { create } from 'zustand';
import { Network, Provider } from '@massalabs/massa-web3';
import { Wallet, WalletName } from '@massalabs/wallet-provider';

export interface AccountStoreState {
  connectedAccount?: Provider;
  balance?: bigint;
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
  setAccounts: (wallet: Wallet, account?: Provider) => Promise<void>;
  setCurrentWallet: (wallet?: Wallet, account?: Provider) => Promise<void>;
  setWallets: (wallets: Wallet[]) => void;
  setConnectedAccount: (account?: Provider) => void;
  setCurrentNetwork: (network: Network) => void;
  refreshBalance: (final: boolean) => void;
}

export const useAccountStore = create<AccountStoreState>((set, get) => ({
  accounts: undefined,
  network: undefined,
  connectedAccount: undefined,
  balance: undefined,
  accountObserver: undefined,
  networkObserver: undefined,
  currentWallet: undefined,
  wallets: [],
  isFetching: false,

  setCurrentWallet: async (wallet?: Wallet, account?: Provider) => {
    set({ isFetching: true });
    try {
      if (!wallet) {
        resetAll(get, set);
        return;
      }

      if (get().currentWallet?.name() !== wallet.name())
        resetObservers(get, set);

      set({ currentWallet: wallet });

      if (
        wallet.name() === WalletName.Bearby ||
        wallet.name() === WalletName.Metamask
      ) {
        try {
          await wallet.connect();
        } catch (error) {
          return;
        }
      }

      get().setAccounts(wallet, account);

      if (!get().accountObserver) {
        setupAccountObserver(wallet, set, get);
      }

      if (!get().networkObserver) {
        setupNetworkObserver(wallet, set, get);
      }

      const network = await wallet.networkInfos();
      get().setCurrentNetwork(network);
    } catch (error) {
      console.log('Failed to set current wallet', error);
    }

    set({ isFetching: false });
  },

  setAccounts: async (wallet: Wallet, account?: Provider) => {
    const accounts = await wallet.accounts();
    set({ accounts });
    get().setConnectedAccount(account || accounts[0]);
  },

  setWallets: (wallets: Wallet[]) => {
    set({ wallets });
    if (!wallets.some((p) => p.name() === get().currentWallet?.name())) {
      resetWallet(set);
    }
  },

  setConnectedAccount: async (connectedAccount?: Provider) => {
    set({ connectedAccount });
    if (!connectedAccount) return;
    const balance = await connectedAccount.balance(false);
    set({ balance });
  },

  setCurrentNetwork: (network: Network) => {
    if (network === get().network) return;
    set({ network });
  },

  refreshBalance: async (final: boolean) => {
    const { connectedAccount } = get();
    if (!connectedAccount) return;
    const balance = await connectedAccount.balance(final);
    set({ balance });
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

function setupAccountObserver(
  wallet: Wallet,
  set: (partial: Partial<AccountStoreState>) => void,
  get: () => AccountStoreState,
) {
  try {
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
  } catch (error) {
    // Wallet does not support account observer
    // console.log('Failed to setup account observer', error);
  }
}

function setupNetworkObserver(
  wallet: Wallet,
  set: (partial: Partial<AccountStoreState>) => void,
  get: () => AccountStoreState,
) {
  try {
    const networkObserver = wallet.listenNetworkChanges(async () => {
      get().setCurrentNetwork(await wallet.networkInfos());
    });
    set({ networkObserver });
  } catch (error) {
    // Wallet does not support network observer
    // console.log('Failed to setup network observer', error);
  }
}
