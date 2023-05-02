import { FiSun } from "react-icons/fi";
// https://react-icons.github.io/react-icons/icons?name=fi
// https://github.com/react-icons/react-icons

export default { title: "Icons", component: FiSun };

// to render the icon
// set icon color using className and then normal tailwind presents
export const _Icons = {
  render: () => (
    <div data-testid="fi-sun">
      <FiSun onClick={() => console.log("click")} className="text-brand" />
    </div>
  ),
};
