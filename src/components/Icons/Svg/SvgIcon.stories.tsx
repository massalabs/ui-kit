import { SvgIcon } from "./SvgIcon";
import { MassaToken } from "../../../assets/svg-components/MassaToken";
import { MassaLogo } from "../../../assets/svg-components/MassaLogo";

export default { title: "Icons/Svg", component: SvgIcon };

const args = {
  svg: <MassaToken />,
  bg: "bg-primary",
};

export const _MassaToken = {
  render: () => <SvgIcon {...args} />,
};

const props = {
  svg: <MassaLogo size={"100px"} />,
  bg: "",
};
export const _MassaLogo = {
  render: () => <SvgIcon {...props} />,
};
