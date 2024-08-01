import { Provider } from '@massalabs/massa-web3';
import { SUPPORTED_MASSA_WALLETS } from '../../massa-react/const';
import { Wallet } from '@massalabs/wallet-provider';

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
  providers: Wallet[];
  isFetching: boolean;
  accountObserver?: {
    unsubscribe: () => void;
  };
  networkObserver?: {
    unsubscribe: () => void;
  };
  chainId?: bigint;

  setCurrentWallet: (provider?: Wallet) => void;
  setProviders: (providers: Wallet[]) => void;

  setConnectedAccount: (account?: Provider) => void;
}

const accountStore = (
  set: (params: Partial<AccountStoreState>) => void,
  get: () => AccountStoreState,
) => ({
  accounts: undefined,
  connectedAccount: undefined,
  accountObserver: undefined,
  networkObserver: undefined,
  currentWallet: undefined,
  providers: [],
  isFetching: false,
  chainId: undefined,

  setCurrentWallet: (currentWallet?: Wallet) => {
    try {
      set({ isFetching: true });

      const previousProvider = get().currentWallet;

      if (previousProvider?.name() !== currentWallet?.name()) {
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
          set({
            chainId: await currentWallet.networkInfos().then((n) => n.chainId),
          });
        });
        set({ networkObserver });
      }

      if (currentWallet?.name() === SUPPORTED_MASSA_WALLETS.BEARBY) {
        currentWallet
          .connect()
          .then(() => {
            // get current network
            currentWallet
              .networkInfos()
              .then((infos) => {
                set({ chainId: infos.chainId });
              })
              .catch((error) => {
                console.warn('error getting network from bearby', error);
              });
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

      currentWallet
        .accounts()
        .then((accounts) => {
          set({ accounts });

          const selectedAccount = accounts[0];
          get().setConnectedAccount(selectedAccount);
        })
        .catch((error) => {
          console.warn('error getting accounts from provider', error);
        });
    } finally {
      set({ isFetching: false });
    }
  },

  setProviders: (providers: Wallet[]) => {
    set({ providers });

    // if current provider is not in the new list of providers, unset it
    if (!providers.some((p) => p.name() === get().currentWallet?.name())) {
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
});

export default accountStore;
