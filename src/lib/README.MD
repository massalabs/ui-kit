# Massa React UI-KIT libraries

This directory contains the React UI-KIT libraries that are used in Massa projects.

## i18n

**You can use it to translate the text in the project.**

Use it like this:

```typescript
import I18n from '@massalabs/react-ui-kit/lib/i18n';
// create a json file to store the text you want to translate:
import enUs from './en_US.json';

const Intl = new I18n({ EN_us: enUs });
Object.freeze(Intl);

export default Intl;
```

See the example in the `ConnectMassaWallets` lib.

Future development: allow to change the language in the dapp.

## ConnectMassaWallets

- contains components that are used to connect to Massa wallets.
- contains a store that you can use in your dapp.
- use the lib i18n to translate the text in the components.

## massa-react

**Oriented to the interactions with Massa blockchain.**

- contains hooks that you can use in your dapp.
- contains utility functions that you can use in your dapp.
- contains constants that you can use in your dapp.
- use the lib i18n to translate the text in the hooks.

## Util

**General UI utility functions.**

- contains utility functions to format amount
- contains utility functions that you can use in your dapp.
- contains hooks that you can use in your dapp.
