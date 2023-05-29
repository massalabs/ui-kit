import { Button } from './Button';
import { FiArrowUpRight, FiDisc } from 'react-icons/fi';

export default { title: 'Components/Button', component: Button };

const args = {
  onClick: () => {
    console.log('clicked');
  },
  preIcon: <FiArrowUpRight />,
  posIcon: <FiArrowUpRight />,
};

export const _Primary = {
  render: () => (
    <>
      <Button {...args}>Primary</Button>

      <br />
      <br />

      <Button {...args} disabled>
        Primary disabled
      </Button>
    </>
  ),
};

export const _PrimaryWithLabel = {
  render: () => (
    <>
      <Button preIcon={<FiDisc />} className="w-40">
        <div className="flex items-center">Coins</div>
      </Button>
      <br />
      <br />
      <Button className="w-40">
        <div className="flex items-center">
          Coins
          <label className="text-tertiary text-xs flex ml-1 items-center">
            (0,2 MAS)
          </label>
        </div>
      </Button>
    </>
  ),
};

export const _Secondary = {
  render: () => (
    <>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>

      <br />
      <br />

      <Button variant="secondary" {...args} disabled>
        Secondary disabled
      </Button>

      <br />
      <br />
    </>
  ),
};

export const _SecondaryWithLabel = {
  render: () => (
    <>
      <Button variant="secondary" preIcon={<FiDisc />} className="w-40">
        <div className="flex items-center">Coins</div>
      </Button>
      <br />
      <br />
      <Button variant="secondary" className="w-40">
        <div className="flex items-center">
          Coins
          <label className="text-c-pressed text-xs flex ml-1 items-center">
            (0,2 MAS)
          </label>
        </div>
      </Button>
    </>
  ),
};
