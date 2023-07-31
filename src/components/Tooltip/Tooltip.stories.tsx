import { Tooltip } from './Tooltip';

export default { title: 'Components/Tooltip', component: Tooltip };

export const _Tooltip = {
  render: () => (
    <>
      <Tooltip content={'Hello I am tooltip content'} />
    </>
  ),
};
