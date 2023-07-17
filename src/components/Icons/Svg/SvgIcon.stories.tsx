import {
  MassaToken,
  MassaLogo,
  MassaWallet,
  StationLogo,
  BridgeLogo,
} from './Massa';

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

export const _BridgeLogo = {
  render: () => (
    <>
      <BridgeLogo theme="theme-dark" />
      <br />
      <BridgeLogo theme="theme-light" />
    </>
  ),
};
