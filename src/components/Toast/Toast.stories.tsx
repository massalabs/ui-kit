import { Toast, toast } from './Toast';
import { Button } from './../Button/Button';

export default { title: 'Components/Toast' };

export const _Toast = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toast.error('Euhh! This is an error message!');
        }}
      >
        Create ERROR Toast
      </Button>
      <br />
      <br />
      <Button onClick={() => toast.success('Uuurraa! This is a success CSS')}>
        Create SUCCESS Toast
      </Button>
      <Toast theme="theme-dark" />
    </>
  ),
};
