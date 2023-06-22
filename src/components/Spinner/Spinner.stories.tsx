import { Button } from '../Button';
import { Spinner } from './Spinner';
import { SvgSpinner } from './SvgSpinner';

export default {
  title: 'Components/Spinner',
};

export const _Spinner = {
  render: () => (
    <>
      <Spinner />
    </>
  ),
};

export const _SpinnerButton = {
  render: () => (
    <>
      <Button preIcon={<SvgSpinner />}>button</Button>
    </>
  ),
};
