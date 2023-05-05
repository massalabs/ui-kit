import { FiSun } from "react-icons/fi";
// https://react-icons.github.io/react-icons/icons?name=fi
// https://github.com/react-icons/react-icons

export default { title: "Icons", component: FiSun };

// to render the icon
// set icon color, size... etc using className and then normal tailwind presents
export const _Icons = {
  render: () => (
    <div data-testid="fi-sun">
      <FiSun className="text-i-tertiary" />
    </div>
  ),
};
