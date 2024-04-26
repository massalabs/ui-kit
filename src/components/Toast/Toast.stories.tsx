import { Toast, ToastContent, toast } from './Toast';
import { Button } from './../Button/Button';

export default { title: 'Components/Toast' };

function ToastContentExample() {
  return (
    <div>
      <p>Toast content</p>
    </div>
  );
}

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
      <Button onClick={() => toast.success('Uuurraa! This is a success CSS')}>
        Create SUCCESS Toast
      </Button>
      <br />
      <Button
        onClick={() =>
          toast(
            (t) => (
              <ToastContent t={t}>
                <ToastContentExample />
              </ToastContent>
            ),
            {
              duration: Infinity,
            },
          )
        }
      >
        Create info infinite Toast
      </Button>
      <br />
      <Button
        onClick={() =>
          toast.loading(
            (t) => <ToastContent t={t}>Work in Progress</ToastContent>,
            { duration: Infinity },
          )
        }
      >
        Create loading Toast
      </Button>
      <br />
      <Button
        onClick={() =>
          toast.error(
            (t) => (
              <ToastContent t={t}>
                <ToastContentExample />
              </ToastContent>
            ),
            {
              duration: Infinity,
            },
          )
        }
      >
        Create Error custom infinite Toast
      </Button>

      <Toast />
    </>
  ),
};
