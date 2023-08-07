import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FAQ, FAQCategory, FAQContent } from '.';

describe('Components | Toggle', () => {
  test('it should render', () => {
    render(
      <>
        <FAQ title={'Minting tokens'}>
          <FAQCategory categoryTitle={'Mint ETH tokens'}>
            <FAQContent>
              <p>How to mint ETH</p>
            </FAQContent>
          </FAQCategory>
          <FAQCategory categoryTitle={'Mint DAI tokens'}>
            <FAQContent>
              <p>How to mint DAI</p>
            </FAQContent>
          </FAQCategory>
        </FAQ>
      </>,
    );

    let faq = screen.getByTestId('faq');

    expect(faq).toBeInTheDocument();
  });
});
