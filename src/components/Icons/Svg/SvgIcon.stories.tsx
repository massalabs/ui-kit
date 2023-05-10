import { MassaToken } from "./SvgComponent/MassaToken";
import { MassaLogo } from "./SvgComponent/MassaLogo";

export default { title: "Icons/Svg", component: MassaLogo };

export const _MassaToken = {
  render: () => <MassaToken size={40} />,
};

export const _MassaLogo = {
  render: () => <MassaLogo size={100} />,
};
