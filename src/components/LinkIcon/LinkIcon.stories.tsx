import { LinkIcon } from "./LinkIcon";
import icoAmountLight from "../../assets/ico-amount-light.svg";

export default { title: "buttons", component: LinkIcon };

const args = {
  onClick: () => {
    console.log("clicked");
  },
};

export const _LinkIcon = {
  render: () => <LinkIcon {...args}>My test</LinkIcon>,
};
export const _LinkIconWithIcon = {
  render: () => (
    <LinkIcon {...args} icon={icoAmountLight}>
      My test
    </LinkIcon>
  ),
};
