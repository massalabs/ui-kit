import '../../../src/global.css';
import React from 'react';
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

    describe('regular input with placeholder and error', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Input placeholder={'placeholder'} error={'error'} />
          </div>,
        );
      });

      it('should render and have placeholder', () => {
        cy.get('[data-testid="input-field"]')
          .should('exist')
          .and('have.attr', 'placeholder');
      });

      it('should display error message', () => {
        cy.get('[data-testid="input-field-message"]').contains('error');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'regular-input-with-placeholder-and-error');
      });
    });

    describe('regular input with content and error', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Input
              placeholder={'placeholder'}
              value={'wrong content'}
              error={'error'}
            />
          </div>,
        );
      });

      it('should render and have placeholder', () => {
        cy.get('[data-testid="input-field"]')
          .should('exist')
          .and('have.attr', 'placeholder');
      });

      it('should wrong content displayed', () => {
        cy.get('[data-testid="input-field"]')
          .should('exist')
          .and('have.value', 'wrong content');
      });

      it('should display error message', () => {
        cy.get('[data-testid="input-field-message"]').contains('error');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'regular-input-with-content-and-error');
      });
    });

    describe('regular input with placeholder and warning', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Input placeholder={'placeholder'} warning={'warning'} />
          </div>,
        );
      });

      it('should render placeholder and warning', () => {
        cy.get('[data-testid="input-field"]')
          .should('exist')
          .and('have.attr', 'placeholder');
        cy.get('[data-testid="input-field-message"]').contains('warning');
      });

      it('should receive typed input and render warning', () => {
        cy.get('[data-testid="input-field"]')
          .type('typed content')
          .should('have.value', 'typed content');
        cy.get('[data-testid="input-field-message"]').contains('warning');
      });

      it('should render warning with no content', () => {
        cy.get('[data-testid="input-field"]')
          .clear()
          .should('have.attr', 'placeholder');

        cy.get('[data-testid="input-field-message"]').should('exist');
      });
      it('should match snapshot', () => {
        compareSnapshot(cy, 'regular-input-with-placeholder-and-warning');
      });
    });
  });
});
