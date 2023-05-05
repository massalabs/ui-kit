import { Button } from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
export default { title: "Components/Button", component: Button };

const primaryArgs = {
  onClick: () => {
    console.log("clicked");
  },
  preIcon: <FiArrowUpRight />,
  posIcon: <FiArrowUpRight />,
};

export const _Primary = {
  render: () => (
    <>
      <Button {...primaryArgs}>Primary</Button>

      <Button style={{ marginTop: 50 }} {...primaryArgs} disabled>
        Primary disabled
      </Button>
    </>
  ),
};
