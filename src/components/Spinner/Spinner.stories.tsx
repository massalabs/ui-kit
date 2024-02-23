import { Spinner, SpinnerSized } from './Spinner';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Spinner',
};

export const _Default = {
  render: () => <Spinner />,
};

export const _InAButton = {
  render: () => (
    <Button disabled>
      <Spinner variant="button" />
    </Button>
  ),
};

export const _VariantButton = {
  render: () => (
    <div className="flex space-x-4">
      <Spinner variant="button" />
      <Button disabled>
        <Spinner />
      </Button>
    </div>
  ),
};

export const _Sized = {
  render: () => (
    <div className="flex space-x-4">
      <SpinnerSized size="sm" />
      <SpinnerSized size="md" />
      <SpinnerSized size="lg" />
    </div>
  ),
};

export const _SizedButton = {
  render: () => (
    <div className="flex space-x-4">
      <Button>
        <SpinnerSized size="sm" />
      </Button>
      <Button disabled>
        <SpinnerSized size="md" />
      </Button>
    </div>
  ),
};
