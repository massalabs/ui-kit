import { SvgIcon } from "./SvgIcon";
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { MassaLogo } from "../../../assets/svg-components/MassaLogo";

export default { title: "Icons/Svg", component: SvgIcon };

const args = {
  svg: <MassaToken />,
};

export const _MassaToken = {
  render: () => <SvgIcon {...args} />,
};

const props = {
  svg: <MassaLogo />,
};
export const _MassaLogo = {
  render: () => <SvgIcon {...props} />,
};
