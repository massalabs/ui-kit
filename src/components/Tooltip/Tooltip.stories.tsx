import { FiAirplay } from 'react-icons/fi';
import { Tooltip } from './Tooltip';

export default { title: 'Components/Tooltip', component: Tooltip };

export const _Tooltip = {
  render: () => (
    <>
      <Tooltip body={'Hello I am tooltip content'} />
    </>
  ),
};

export const _TooltipCustomIcon = {
  render: () => (
    <>
      <Tooltip body={<p>Hello I am tooltip content</p>}>
        <FiAirplay size={48} className="text-s-warning" />
      </Tooltip>
    </>
  ),
};
