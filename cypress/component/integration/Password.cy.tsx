import '../../../src/global.css';
import { Password } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Password', function () {
  describe('Input', () => {
    describe('default password', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Password />
          </div>,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="password-input"]').should('exist');
      });

      it('should focus on click', () => {
        cy.get('[data-testid="password-input"]').focus().should('be.focused');
      });

      it('should receive typed input', () => {
        cy.get('[data-testid="password-input"]')
          .type('typed content')
          .should('have.value', 'typed content')
          .clear();
      });

      it('should hide typed input', () => {
        cy.get('[data-testid="password-input"]')
          .type('typed content')
          .should('have.value', 'typed content');
        cy.get('[data-testid="password-input"]').should('have.attr', 'type');
        cy.get('[data-testid="password-input"]')
          .invoke('attr', 'type')
          .should('eq', 'password');
      });

      it('should show typed input', () => {
        cy.get('[data-testid="password-input"]')
          .type('typed content')
          .should('have.value', 'typed content');

        cy.get('[data-testid="password-icon"]').should('exist').click();

        cy.get('[data-testid="password-input"]')
          .invoke('attr', 'type')
          .should('eq', 'text');
      });

      it('should show typed input', () => {
        cy.get('[data-testid="password-input"]')
          .type('typed content')
          .should('have.value', 'typed content');

        cy.get('[data-testid="password-icon"]').should('exist').click();

        cy.get('[data-testid="password-input"]')
          .invoke('attr', 'type')
          .should('eq', 'text');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-password');
      });
    });

    describe('default password with error', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Password error={'error'} />
          </div>,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="password-input"]').should('exist');
      });

      it('should display error message', () => {
        cy.get('[data-testid="input-field-message"]')
          .should('exist')
          .contains('error');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-password-with-error');
      });
    });

    describe('default password with warning', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Password warning={'warning'} />
          </div>,
        );
      });

      it('should render', () => {
        cy.get('[data-testid="password-input"]').should('exist');
      });

      it('should display warning message', () => {
        cy.get('[data-testid="input-field-message"]')
          .should('exist')
          .contains('warning');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'default-password-with-warning');
      });
    });
  });
});
