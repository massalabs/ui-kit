import { FiArrowUpRight } from 'react-icons/fi';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';
import { Selector } from './Selector';
import { Vote } from '../Vote';

export default {
  title: 'Components/Selector',
};

export const _Primary = {
  render: () => (
    <>
      <Selector
        preIcon={<FiArrowUpRight />}
        posIcon={<MassaLogo size={24} />}
        content={{
          title: 'account #',
          amount: '0,000.00',
        }}
        customClass="!w-1/2"
      />
      <br />

      <Selector
        type="description"
        preIcon={<FiArrowUpRight />}
        posIcon={<MassaLogo size={24} />}
        content={{
          title: 'Website name',
          website: 'example.massa',
          description: 'Website’s description up to 120 characters',
          vote: (
            <Vote
              votes={0}
              voted="VOTE"
              onVote={() => console.log('vote')}
              customClass="text-f-secondary"
            />
          ),
        }}
        customClass="!w-1/2"
      />
    </>
  ),
};

export const _Secondary = {
  render: () => (
    <>
      <Selector
        variant="secondary"
        preIcon={<FiArrowUpRight />}
        posIcon={<MassaLogo size={24} />}
        content={{
          title: 'account #',
          amount: '0,000.00',
        }}
        customClass="!w-1/2"
      />
      <br />

      <Selector
        type="description"
        variant="secondary"
        preIcon={<FiArrowUpRight />}
        posIcon={<MassaLogo size={24} />}
        content={{
          title: 'Website name',
          website: 'example.massa',
          description: 'Website’s description up to 120 characters',
          vote: (
            <Vote votes={0} voted="VOTE" onVote={() => console.log('vote')} />
          ),
        }}
        customClass="!w-1/2"
      />
    </>
  ),
};
