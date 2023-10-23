import '../../../src/global.css';
import { Clipboard } from '../../../src/components';
import { compareSnapshot } from '../../compareSnapshot';

describe('Component | Integration | Clipboard', function () {
  describe('Clipboard', () => {
    describe('clipboard with only raw-content', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Clipboard rawContent={'raw content'} />
          </div>,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]').contains('raw content');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'clipboard-with-only-raw-content');
      });
    });

    describe('clipboard with diplayed content', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Clipboard
              rawContent={'raw content'}
              displayedContent={'formatted content'}
            />
            ,
          </div>,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]').contains(
          'formatted content',
        );
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'clipboard-with-displayed-content');
      });
    });

    describe('clipboard success flow', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Clipboard
              rawContent={'raw content'}
              success="Copied!"
              displayedContent={'formatted content'}
            />
            ,
          </div>,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]').contains(
          'formatted content',
        );
      });

      it('should fire the copy clipboard function', () => {
        cy.on('window:confirm', () => true);

        cy.window().then((win) => {
          cy.stub(win, 'prompt')
            .returns(win.prompt)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .as('copyToClipboardPrompt');
        });

        cy.get('[data-testid="clipboard-field"]').click();
        cy.get('@copyToClipboardPrompt').should('be.called');

        cy.get('@copyToClipboardPrompt')
          .should((prompt) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(prompt.args[0][1]).to.equal('raw content');
          })
          .then(() => {
            cy.get('[data-testid="clipboard-input-message"]')
              .should('exist')
              .contains('Copied!');
          });

        cy.get('[data-testid="clipboard-input-message"]').should('not.exist');
      });
    });

    describe('clipboard raw content success flow', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Clipboard rawContent={'raw content'} success="Copied!" />
          </div>,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]').contains('raw content');
      });

      it('should fire the copy clipboard function', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]').contains('raw content');
        cy.on('window:confirm', () => true);

        cy.window().then((win) => {
          cy.stub(win, 'prompt')
            .returns(win.prompt)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .as('copyToClipboardPrompt');
        });

        cy.get('[data-testid="clipboard-field"]').click();
        cy.get('@copyToClipboardPrompt').should('be.called');

        cy.get('@copyToClipboardPrompt')
          .should((prompt) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            expect(prompt.args[0][1]).to.equal('raw content');
          })
          .then(() => {
            cy.get('[data-testid="clipboard-input-message"]')
              .should('exist')
              .contains('Copied!');
          });

        cy.get('[data-testid="clipboard-input-message"]').should('not.exist');
      });

      it('should match snapshot', () => {
        compareSnapshot(cy, 'clipboard-raw-content-success-flow');
      });
    });

    describe('clipboard error flow', () => {
      beforeEach(() => {
        cy.mount(
          <div className="theme-dark">
            <Clipboard rawContent={''} error="Oupps!" />
          </div>,
        );
      });
      it('should render', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]')
          .contains('foo')
          .should('not.exist');
      });

      it('should not fire the copy clipboard function', () => {
        cy.get('[data-testid="clipboard-field"]').should('exist');
        cy.get('[data-testid="clipboard-content"]')
          .contains('foo')
          .should('not.exist');
        cy.on('window:confirm', () => true);

        cy.window().then((win) => {
          cy.stub(win, 'prompt')
            .returns(win.prompt)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .as('copyToClipboardPrompt');
        });

        cy.get('[data-testid="clipboard-copy-icon"]').click();
        cy.get('@copyToClipboardPrompt')
          .should('not.be.called')
          .then(() => {
            cy.get('[data-testid="clipboard-input-message"]')
              .should('exist')
              .contains('Oupps!');
          });

        cy.get('[data-testid="clipboard-input-message"]').should('not.exist');
      });

      // We are not testing snapshots here because we know it will fail due to the absence of raw content
    });
  });
});
