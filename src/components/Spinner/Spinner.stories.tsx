import { Spinner } from './Spinner';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Spinner',
};

export const _Default = {
  render: () => <Spinner />,
};

export const _Button = {
  render: () => (
    <Button disabled>
      <Spinner variant="button" />
    </Button>
  ),
};
