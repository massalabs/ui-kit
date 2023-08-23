import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Accordion, AccordionCategory, AccordionContent } from '.';

describe('Components | Accordion', () => {
  test('it should render', () => {
    render(
      <>
        <Accordion title={'Minting tokens'}>
          <AccordionCategory categoryTitle={'Mint ETH tokens'}>
            <AccordionContent>
              <p>How to mint ETH</p>
            </AccordionContent>
          </AccordionCategory>
          <AccordionCategory categoryTitle={'Mint DAI tokens'}>
            <AccordionContent>
              <p>How to mint DAI</p>
            </AccordionContent>
          </AccordionCategory>
        </Accordion>
      </>,
    );

    let accordion = screen.getByTestId('accordion');

    expect(accordion).toBeInTheDocument();
  });
});
