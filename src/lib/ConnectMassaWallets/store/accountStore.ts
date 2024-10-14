import { Provider } from '@massalabs/massa-web3';
import { create } from 'zustand';
import { Wallet, WalletName } from '@massalabs/wallet-provider';

async function handleBearbyAccountChange(
  newAddress: string,
  store: AccountStoreState,
) {
  const { connectedAccount, currentWallet, setConnectedAccount } = store;

  const oldAddress = connectedAccount?.address;

  if (newAddress !== oldAddress) {
    const newAccounts = await currentWallet?.accounts();

    if (newAccounts?.length) {
      // Bearby returns only one account
      const newAccount = newAccounts[0];
      setConnectedAccount(newAccount);
    }
  }
}

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
  chainId?: bigint;
  network?: string;

  setCurrentWallet: (wallet?: Wallet) => void;
  setWallets: (wallets: Wallet[]) => void;

  setConnectedAccount: (account?: Provider) => void;
  setCurrentNetwork: () => void;
}

export const useAccountStore = create<AccountStoreState>((set, get) => ({
  accounts: undefined,
  connectedAccount: undefined,
  accountObserver: undefined,
  networkObserver: undefined,
  currentWallet: undefined,
  wallets: [],
  isFetching: false,
  chainId: undefined,
  network: undefined,

  setCurrentWallet: (currentWallet?: Wallet) => {
    try {
      set({ isFetching: true });

      const previousWallet = get().currentWallet;

      if (previousWallet?.name() !== currentWallet?.name()) {
        get().accountObserver?.unsubscribe();
        get().networkObserver?.unsubscribe();
        set({ accountObserver: undefined, networkObserver: undefined });
      }
      if (!currentWallet) {
        set({
          currentWallet: undefined,
          connectedAccount: undefined,
          accounts: undefined,
        });
        return;
      }

      if (!get().networkObserver) {
        const networkObserver = currentWallet.listenNetworkChanges(async () => {
          get().setCurrentNetwork();
        });
        set({ networkObserver });
      }

      if (currentWallet?.name() === WalletName.Bearby) {
        currentWallet
          .connect()
          .then(() => {
            // subscribe to network events
            const observer = currentWallet.listenAccountChanges(
              (newAddress: string) => {
                handleBearbyAccountChange(newAddress, get());
              },
            );

            set({ currentWallet, accountObserver: observer });

            // get connected account
            currentWallet
              .accounts()
              .then((accounts) => {
                // bearby expose only 1 account
                get().setConnectedAccount(accounts[0]);
                set({ accounts });
              })
              .catch((error) => {
                console.warn('error getting accounts from bearby', error);
              });
          })
          .catch((error) => {
            console.warn('error connecting to bearby', error);
          });
        return;
      }

      set({ currentWallet });

      get().setCurrentNetwork();

      currentWallet
        .accounts()
        .then((accounts) => {
          set({ accounts });

          const selectedAccount = accounts[0];
          get().setConnectedAccount(selectedAccount);
        })
        .catch((error) => {
          console.warn('error getting accounts from wallet', error);
        });
    } finally {
      set({ isFetching: false });
    }
  },

  setWallets: (wallets: Wallet[]) => {
    set({ wallets });

    // if current wallet is not in the new list of wallets, unset it
    if (!wallets.some((p) => p.name() === get().currentWallet?.name())) {
      set({
        currentWallet: undefined,
        connectedAccount: undefined,
        accounts: undefined,
      });
    }
  },

  // set the connected account, and update the massa client
  setConnectedAccount: async (connectedAccount?: Provider) => {
    set({ connectedAccount });
  },

  setCurrentNetwork: () => {
    get()
      .currentWallet?.networkInfos()
      .then((infos) => {
        set({ chainId: infos.chainId, network: infos.name });
      });
  },
}));
