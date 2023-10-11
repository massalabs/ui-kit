import '../../../src/global.css';
import React from 'react';
import { Balance } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Balance', function () {
  describe('Balance', () => {
    describe('with equal option', () => {
      it('should render', () => {
        cy.mount(<Balance amount={'0123456.78'} equal={'000123456,78'} />);

        cy.get('[data-testid="balance"]').should('exist');
        cy.get('[data-testid="balance"]').should('contain', '0123456.78');
        cy.get('[data-testid="balance-equal"]').should('exist');
        cy.get('[data-testid="balance-equal"]').should(
          'contain',
          '000123456,78',
        );
      });

      it('should match snapshot', () => {
        cy.mount(<Balance amount={'0123456.78'} equal={'000123456,78'} />);

        compareSnapshot(cy, 'balance-with-equal');
      });
    });

    describe('without equal option', () => {
      it('should render', () => {
        cy.mount(<Balance amount={'0123456.78'} />);

        cy.get('[data-testid="balance"]').should('exist');
        cy.get('[data-testid="balance"]').should('contain', '0123456.78');
        cy.get('[data-testid="balance-equal"]').should('not.exist');
      });

      it('should match snapshot', () => {
        cy.mount(<Balance amount={'0123456.78'} />);

        compareSnapshot(cy, 'balance-without-equal');
      });
    });
  });
});
