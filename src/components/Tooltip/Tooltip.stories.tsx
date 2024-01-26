import { FiAirplay } from 'react-icons/fi';
import { Tooltip } from './Tooltip';

export default { title: 'Components/Tooltip', component: Tooltip };

export const _Tooltip = {
  render: () => (
    <>
      <Tooltip content={'Hello I am tooltip content'} />
    </>
  ),
};

export const _TooltipCustomIcon = {
  render: () => (
    <>
      <Tooltip content={'Hello I am tooltip content'}>
        <FiAirplay size={48} className="text-s-warning" />
      </Tooltip>
    </>
  ),
};
