import '../../../src/global.css';
import { Dropdown, MassaLogo } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Dropdown', function () {
  describe('Dropdown', () => {
    beforeEach(() => {
      cy.mount(
        <div className="theme-dark">
          <Dropdown
            options={[
              {
                icon: (
                  <MassaLogo
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
            ]}
          />
        </div>,
      );
    });

    describe('default dropdown', () => {
      it('should render', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-dropdown');
      });
    });

    describe('default xs dropdown', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Dropdown
              size={'xs'}
              options={[
                {
                  icon: (
                    <MassaLogo
                      size={32}
                      className="bg-c-default rounded-full"
                    />
                  ),
                  item: 'account 1 name',
                  onClick: () => console.log('option 1'),
                },
                {
                  icon: <MassaLogo size={32} />,
                  item: 'account 2 name with a biiiiig content',
                },
                { icon: <MassaLogo size={32} />, item: 'account 3 name' },
              ]}
            />
          </div>,
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
          <div className="theme-dark">
            <Dropdown
              size={'md'}
              options={[
                {
                  icon: (
                    <MassaLogo
                      size={32}
                      className="bg-c-default rounded-full"
                    />
                  ),
                  item: 'account 1 name',
                  onClick: () => console.log('option 1'),
                },
                {
                  icon: <MassaLogo size={32} />,
                  item: 'account 2 name with a biiiiig content',
                },
                { icon: <MassaLogo size={32} />, item: 'account 3 name' },
              ]}
            />
          </div>,
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
      it('should open and close when clicked', () => {
        cy.get('[data-testid="dropdown"]').should('exist');
        cy.get('[data-testid="dropdown-button"]').should('exist').click();

        for (let i = 1; i <= 3; i++) {
          cy.get(`[data-testid="dropdown-option-${i}"]`).should('be.visible');
        }

        cy.get('[data-testid="dropdown-button"]').should('exist').click();

        cy.get('[data-testid="dropdown-option-1"]').should('be.visible');

        cy.get(`[data-testid="dropdown-option-2"]`).should('not.be.visible');
        cy.get(`[data-testid="dropdown-option-3"]`).should('not.be.visible');
      });

      it('should select option', () => {
        cy.get('[data-testid="dropdown-button"]').click();
        cy.get(`[data-testid="dropdown-option-2"]`).click();

        cy.get('[data-testid="dropdown-option-2"]').should('be.visible');

        cy.get('[data-testid="dropdown-selected-icon"]').should('be.visible');
        cy.get('[data-testid="dropdown-selected-item"]').should(
          'contain',
          'account 2 name',
        );
      });

      it('should fire fn when clicked', () => {
        cy.window().then((win) => {
          cy.stub(win.console, 'log').as('consoleLog');
        });

        cy.get('[data-testid="dropdown-option-1"]').click({
          multiple: true,
        });

        cy.get('@consoleLog').should('be.calledWith', 'option 1');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-dropdown-flow');
      });
    });
  });
});
