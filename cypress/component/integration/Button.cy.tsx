import '../../../src/global.css';
import React from 'react';
import { Button } from '../../../src/components';
import { FiArrowUpRight } from 'react-icons/fi';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Button', function () {
  describe('Button', () => {
    // PRIMARY VARIANT

    describe('primary button with both icons', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            preIcon={<FiArrowUpRight data-testid="preIcon" />}
            posIcon={<FiArrowUpRight data-testid="posIcon" />}
          />,
        );
      });
      it('should render primary button with both icons', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-both-icons');
      });
    });

    describe('primary button without icons', () => {
      beforeEach(() => {
        cy.mount(<Button />);
      });
      it('should render primary button without icons', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-without-icons');
      });
    });

    describe('primary button with preIcon', () => {
      beforeEach(() => {
        cy.mount(<Button preIcon={<FiArrowUpRight data-testid="preIcon" />} />);
      });

      it('should render primary button with preIcon', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-preIcon');
      });
    });

    describe('primary button with posIcon', () => {
      beforeEach(() => {
        cy.mount(<Button posIcon={<FiArrowUpRight data-testid="posIcon" />} />);
      });
      it('should render primary button with posIcon', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-posIcon');
      });
    });

    describe('primary button with both icons and with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            preIcon={<FiArrowUpRight data-testid="preIcon" />}
            posIcon={<FiArrowUpRight data-testid="posIcon" />}
          >
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render primary button with both icons and children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-both-icons-and-with-children');
      });
    });

    describe('primary button with preIcon with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button preIcon={<FiArrowUpRight data-testid="preIcon" />}>
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render primary button with preIcon and with children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-preIcon-with-children');
      });
    });

    describe('primary button with posIcon with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button posIcon={<FiArrowUpRight data-testid="posIcon" />}>
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render primary button with posIcon and children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-posIcon-with-children');
      });
    });

    describe('primary button without icons and with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button>
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render primary button without icons and children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-without-icons-and-with-children');
      });
    });

    // SECONDARY VARIANT

    describe('secondary button with both icons', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            variant="secondary"
            preIcon={<FiArrowUpRight data-testid="preIcon" />}
            posIcon={<FiArrowUpRight data-testid="posIcon" />}
          />,
        );
      });
      it('should render secondary button with both icons', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'secondary-button-with-both-icons');
      });
    });

    describe('secondary button without icons', () => {
      beforeEach(() => {
        cy.mount(<Button variant="secondary" />);
      });
      it('should render secondary button without icons', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'secondary-button-without-icons');
      });
    });

    describe('secondary button with preIcon', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            variant="secondary"
            preIcon={<FiArrowUpRight data-testid="preIcon" />}
          />,
        );
      });
      it('should render secondary button with preIcon', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'secondary-button-with-preIcon');
      });
    });

    describe('secondary button with posIcon', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            variant="secondary"
            posIcon={<FiArrowUpRight data-testid="posIcon" />}
          />,
        );
      });
      it('should render secondary button with posIcon', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'secondary-button-with-posIcon');
      });
    });

    describe('secondary button with both icons and with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            variant="secondary"
            preIcon={<FiArrowUpRight data-testid="preIcon" />}
            posIcon={<FiArrowUpRight data-testid="posIcon" />}
          >
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render secondary button with both icons and children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(
          cy,
          'secondary-button-with-both-icons-and-with-children',
        );
      });
    });

    describe('secondary button with preIcon with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            variant="secondary"
            preIcon={<FiArrowUpRight data-testid="preIcon" />}
          >
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render secondary button with preIcon and with children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'primary-button-with-preIcon-with-children');
      });
    });

    describe('secondary button with posIcon with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button
            variant="secondary"
            posIcon={<FiArrowUpRight data-testid="posIcon" />}
          >
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render secondary button with posIcon and children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'secondary-button-with-posIcon-with-children');
      });
    });

    describe('secondary button without icons and with children', () => {
      beforeEach(() => {
        cy.mount(
          <Button variant="secondary">
            <div data-testid="children">Children</div>
          </Button>,
        );
      });
      it('should render secondary button without icons and children', () => {
        cy.get('[data-testid="button"]').should('exist');
        cy.get('[data-testid="preIcon"]').should('not.exist');
        cy.get('[data-testid="posIcon"]').should('not.exist');
        cy.get('[data-testid="children"]').should('exist');
        cy.get('[data-testid="children"]').should('contain', 'Children');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'secondary-button-without-icons-and-with-children');
      });
    });
  });
});
