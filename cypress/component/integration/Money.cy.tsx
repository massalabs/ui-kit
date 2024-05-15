import '../../../src/global.css';
import React from 'react';
import { Money } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Money', function () {
  // Three tests => Default Money, nMAS Money, disabled Money

  describe('Default Money', () => {
    beforeEach(() => {
      cy.mount(
        <div className="theme-dark">
          <Money placeholder="placeholder" />
        </div>,
      );
    });
    it('should render', () => {
      cy.get('[data-testid="money-field"]').should('exist');
    });

    it('should match snapshot', () => {
      compareSnapshot(cy, 'default-money');
    });
  });
});
