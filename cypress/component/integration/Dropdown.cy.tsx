import '../../../src/global.css';
import React from 'react';
import { Dropdown, MassaLogo, MassaToken } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Dropdown', function () {
  describe('Dropdown', () => {
    describe('default dropdown', () => {
      beforeEach(() => {
        cy.mount(
          <Dropdown
            options={[
              {
                icon: (
                  <MassaToken size={32} className="bg-c-default rounded-full" />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo size={32} />,
                item: 'account 2 name with a biiiiig content',
              },
              { icon: <MassaLogo size={32} />, item: 'account 3 name' },
              { icon: <MassaLogo size={32} />, item: 'account 4 name' },
              { icon: <MassaLogo size={32} />, item: 'account 5 name' },
              { icon: <MassaLogo size={32} />, item: 'account 6 name' },
            ]}
          />,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
      });

      it('should match snapshot', () => {
        cy.mount(
          <Dropdown
            options={[
              {
                icon: (
                  <MassaToken size={32} className="bg-c-default rounded-full" />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo size={32} />,
                item: 'account 2 name with a biiiiig content',
              },
              { icon: <MassaLogo size={32} />, item: 'account 3 name' },
              { icon: <MassaLogo size={32} />, item: 'account 4 name' },
              { icon: <MassaLogo size={32} />, item: 'account 5 name' },
              { icon: <MassaLogo size={32} />, item: 'account 6 name' },
            ]}
          />,
        );

        compareSnapshot(cy, 'default-dropdown');
      });
    });

    describe('default xs dropdown', () => {
      beforeEach(() => {
        cy.mount(
          <Dropdown
            size={'xs'}
            options={[
              {
                icon: (
                  <MassaToken size={32} className="bg-c-default rounded-full" />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo size={32} />,
                item: 'account 2 name with a biiiiig content',
              },
              { icon: <MassaLogo size={32} />, item: 'account 3 name' },
              { icon: <MassaLogo size={32} />, item: 'account 4 name' },
              { icon: <MassaLogo size={32} />, item: 'account 5 name' },
              { icon: <MassaLogo size={32} />, item: 'account 6 name' },
            ]}
          />,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-xs-dropdown');
      });
    });

    describe('default md dropdown', () => {
      beforeEach(() => {
        cy.mount(
          <Dropdown
            size={'md'}
            options={[
              {
                icon: (
                  <MassaToken size={32} className="bg-c-default rounded-full" />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo size={32} />,
                item: 'account 2 name with a biiiiig content',
              },
              { icon: <MassaLogo size={32} />, item: 'account 3 name' },
              { icon: <MassaLogo size={32} />, item: 'account 4 name' },
              { icon: <MassaLogo size={32} />, item: 'account 5 name' },
              { icon: <MassaLogo size={32} />, item: 'account 6 name' },
            ]}
          />,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-md-dropdown');
      });
    });

    describe('default dropdown flow', () => {
      beforeEach(() => {
        cy.mount(
          <Dropdown
            options={[
              {
                icon: (
                  <MassaToken
                    data-testid="dropdown-option-1"
                    size={32}
                    className="bg-c-default rounded-full"
                  />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-2" size={32} />,
                item: 'account 2 name with a biiiiig content',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-3" size={32} />,
                item: 'account 3 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-4" size={32} />,
                item: 'account 4 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-5" size={32} />,
                item: 'account 5 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-6" size={32} />,
                item: 'account 6 name',
              },
            ]}
          />,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
        it('should open and close when clicked', () => {
          cy.get('[data-testid="dropdown"]').should('exist');

          for (let i = 1; i <= 6; i++) {
            cy.get(`[data-testid="dropdown-option-${i}"]`).should('exist');
          }

          cy.get('[data-testid="dropdown-option-1"]').should('be.visible');
          for (let i = 2; i <= 6; i++) {
            cy.get(`[data-testid="dropdown-option-${i}"]`).should(
              'not.be.visible',
            );
          }
        });

        // open
        cy.get('[data-testid="dropdown-button"]').should('exist').click();

        for (let i = 1; i <= 6; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should('be.visible');
        }

        // close
        cy.get('[data-testid="dropdown-button"]').should('exist').click();

        cy.get('[data-testid="dropdown-option-1"]').should('be.visible');
        for (let i = 2; i <= 6; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should(
            'not.be.visible',
          );
        }
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-dropdown-flow');
      });
    });

    describe('select option dropdown flow', () => {
      beforeEach(() => {
        cy.mount(
          <Dropdown
            options={[
              {
                icon: (
                  <MassaToken
                    data-testid="dropdown-option-1"
                    size={32}
                    className="bg-c-default rounded-full"
                  />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-2" size={32} />,
                item: 'account 2 name with a biiiiig content',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-3" size={32} />,
                item: 'account 3 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-4" size={32} />,
                item: 'account 4 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-5" size={32} />,
                item: 'account 5 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-6" size={32} />,
                item: 'account 6 name',
              },
            ]}
          />,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
        it('should open and close when clicked', () => {
          cy.get('[data-testid="dropdown"]').should('exist');

          for (let i = 1; i <= 6; i++) {
            cy.get(`[data-testid="dropdown-option-${i}"]`).should('exist');
          }

          cy.get('[data-testid="dropdown-option-1"]').should('be.visible');
          for (let i = 2; i <= 6; i++) {
            cy.get(`[data-testid="dropdown-option-${i}"]`).should(
              'not.be.visible',
            );
          }
        });
        // open state
        cy.get('[data-testid="dropdown-button"]').should('exist').click();

        for (let i = 1; i <= 6; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should('be.visible');
        }

        cy.get(`[data-testid="dropdown-option-4"]`).click();

        // close state
        cy.get('[data-testid="dropdown-option-4"]').should('be.visible');

        for (let i = 1; i <= 6; i++) {
          if (i === 4) {
            continue;
          } else {
            cy.get(`[data-testid="dropdown-option-${i}"]`).should(
              'not.be.visible',
            );
          }
        }

        cy.get('[data-testid="dropdown-selected-icon"]').should('be.visible');
        cy.get('[data-testid="dropdown-selected-item"]').should(
          'contain',
          'account 4 name',
        );
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-option-dropdown-flow');
      });
    });

    describe('fire function dropdown flow', () => {
      beforeEach(() => {
        cy.mount(
          <Dropdown
            options={[
              {
                icon: (
                  <MassaToken
                    data-testid="dropdown-option-1"
                    size={32}
                    className="bg-c-default rounded-full"
                  />
                ),
                item: 'account 1 name',
                onClick: () => console.log('option 1'),
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-2" size={32} />,
                item: 'account 2 name with a biiiiig content',
                onClick: () => console.log('option 2'),
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-3" size={32} />,
                item: 'account 3 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-4" size={32} />,
                item: 'account 4 name',
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-5" size={32} />,
                item: 'account 5 name',
                onClick: () => console.log('option 5'),
              },
              {
                icon: <MassaLogo data-testid="dropdown-option-6" size={32} />,
                item: 'account 6 name',
              },
            ]}
          />,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
        cy.get('[data-testid="dropdown"]').should('exist');

        for (let i = 1; i <= 6; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should('exist');
        }

        cy.get('[data-testid="dropdown-option-1"]').should('be.visible');
        for (let i = 2; i <= 6; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should(
            'not.be.visible',
          );
        }

        cy.get('[data-testid="dropdown-selected-icon"]').should('be.visible');
        cy.get('[data-testid="dropdown-selected-item"]').should(
          'contain',
          'account 1 name',
        );
      });

      // init state
      it('should fire fn when clicked', () => {
        cy.window().then((win) => {
          cy.stub(win.console, 'log').as('consoleLog');
        });

        cy.get('[data-testid="dropdown-option-1"]').click({ multiple: true });

        cy.get('@consoleLog').should('be.calledWith', 'option 1');

        // open state
        cy.get('[data-testid="dropdown-button"]').should('exist').click();

        for (let i = 1; i <= 6; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should('be.visible');
        }

        cy.get(`[data-testid="dropdown-option-5"]`).click();

        cy.get('@consoleLog').should('be.calledWith', 'option 5');

        // close state
        cy.get('[data-testid="dropdown-option-5"]').should('be.visible');

        for (let i = 1; i <= 6; i++) {
          if (i === 5) {
            continue;
          } else {
            cy.get(`[data-testid="dropdown-option-${i}"]`).should(
              'not.be.visible',
            );
          }
        }

        cy.get('[data-testid="dropdown-selected-icon"]').should('be.visible');
        cy.get('[data-testid="dropdown-selected-item"]').should(
          'contain',
          'account 5 name',
        );
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'fire-function-dropdown-flow');
      });
    });
  });
});
