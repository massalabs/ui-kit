import { FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';
import { Accordion, AccordionCategory, AccordionContent } from './Accordion';

export default { title: 'Components/Accordion', component: Accordion };

export const _AccordionFAQ = {
  render: () => (
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
    </>
  ),
};

export const _AccordionSign = {
  render: () => (
    <>
      <AccordionCategory
        iconOpen={<FiChevronDown />}
        iconClose={<FiChevronUp />}
        categoryTitle={'Forward Burn Description'}
        isChild={false}
      >
        <AccordionContent>
          <p>
            This is a description of the sign operation. This is a description
            of the sign operation. This is a description of the sign operation.
            This is a description of the sign operation.
          </p>
        </AccordionContent>
      </AccordionCategory>
    </>
  ),
};

export const _AccordionSignTitle = {
  render: () => (
    <>
      <AccordionCategory
        iconOpen={<FiChevronDown />}
        iconClose={<FiChevronUp />}
        isChild={false}
        categoryTitle={
          <>
            <div className="flex items-center w-full gap-10">
              <FiMenu />
              <p>Forward Burn Description</p>
            </div>
          </>
        }
      >
        <AccordionContent>
          <p>
            This is a description of the sign operation. This is a description
            of the sign operation. This is a description of the sign operation.
            This is a description of the sign operation.
          </p>
        </AccordionContent>
      </AccordionCategory>
    </>
  ),
};
