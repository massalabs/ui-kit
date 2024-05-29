import { Eth, Toast, WETH, createCustomFt, toast } from '..';
import { Mns } from './Mns';

export default {
  title: 'Components/Mns',
};

export const _Mns = {
  render: () => (
    <>
      <Mns mns="massasockette" />
      <br />

      <Mns mns="customicon" icon={createCustomFt(Eth, WETH, 24)} />
      <br />

      <Mns mns="customcss" className="p-4 bg-brand" />
      <br />

      <Mns
        mns="toast"
        onClick={() => {
          toast.success('callback !');
        }}
        className="hover:cursor-pointer"
      />
      <Toast />
    </>
  ),
};
