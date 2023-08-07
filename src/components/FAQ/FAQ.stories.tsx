import { FAQ, FAQCategory, FAQContent } from './FAQ';

export default { title: 'Components/FAQ', component: FAQ };

export const _FAQ = {
  render: () => (
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
    </>
  ),
};
