import { MassaToken } from './Massa/MassaToken';
import { MassaLogo } from './Massa/MassaLogo';
import { MassaWallet } from './Massa/MassaWallet';
import { StationLogo } from './Massa/StationLogo';

export default { title: 'Icons/Massa' };

export const _MassaToken = {
  render: () => <MassaToken size={40} />,
};

export const _MassaLogo = {
  render: () => <MassaLogo size={40} />,
};

export const _MassaWallet = {
  render: () => <MassaWallet size={40} />,
};

export const _StationLogo = {
  render: () => (
    <>
      <StationLogo theme="theme-dark" />
      <br />
      <StationLogo theme="theme-light" />
    </>
  ),
};
