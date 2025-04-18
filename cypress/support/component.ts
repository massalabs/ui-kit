/* eslint-disable @typescript-eslint/no-namespace */
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mount } from 'cypress/react18';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import compareSnapshotCommand from 'cypress-image-diff-js/command';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { RecurseDefaults } from 'cypress-recurse';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      compareSnapshot(
        name: string,
        testThreshold?: number,
        retryOptions?: Partial<typeof RecurseDefaults>,
      ): Chainable<Element>;
    }
    interface Chainable {
      mount: typeof mount;
    }
  }
}

compareSnapshotCommand();

Cypress.Commands.add('mount', mount);

after(() => {
  cy.task('generateReport');
});

// Example use:
// cy.mount(<MyComponent />)
