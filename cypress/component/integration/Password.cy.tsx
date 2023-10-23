import '../../../src/global.css';
import { Input } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Input', function () {
  describe('Input', () => {
    describe('regular input with placeholder', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Input placeholder={'placeholder'} />
          </div>,
        );
      });

      it('should render and have placeholder', () => {
        cy.get('[data-testid="input-field"]')
          .should('exist')
          .and('have.attr', 'placeholder');
      });

      it('should focus on click', () => {
        cy.get('[data-testid="input-field"]').click().should('be.focused');
      });

      it('should receive typed input', () => {
        cy.get('[data-testid="input-field"]')
          .type('typed content')
          .should('have.value', 'typed content')
          .clear()
          .should('have.attr', 'placeholder');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'regular-input-with-placeholder');
      });
    });
  });
});
