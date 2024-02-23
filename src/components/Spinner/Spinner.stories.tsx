import { Spinner } from './Spinner';

export default {
  title: 'Components/Spinner',
};

export const _Default = {
  render: () => (
    <div className="flex space-x-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
