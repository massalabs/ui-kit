import {
  MassaLogo,
  MassaWallet,
  StationLogo,
  FT1,
  InterrogationPoint,
} from './Massa';

export default { title: 'Icons/Massa' };

export const _MassaLogo = {
  render: () => <MassaLogo size={40} />,
};

export const _MassaLogoCustomColors = {
  render: () => (
    <MassaLogo size={40} primaryColor="black" secondaryColor="white" />
  ),
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

export const _FT1 = {
  render: () => <FT1 size={40} />,
};

export const _InterrogationPoint = {
  render: () => <InterrogationPoint size={40} />,
};
