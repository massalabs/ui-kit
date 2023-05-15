import { Dropdown } from "./Dropdown";
import { MassaToken } from "../Icons/Svg/SvgComponent/MassaToken";
import { MassaLogo } from "../Icons/Svg/SvgComponent/MassaLogo";
import FranceFlag from "./../../assets/flags/france.svg";
import UnitedStatesFlag from "../../assets/flags/unitedStates.svg";
import ItalyFlag from "../../assets/flags/italy.svg";
import BrazilFlag from "../../assets/flags/brazil.svg";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export const _Dropdown = {
  render: () => (
    <>
      <div className="w-64">
        <Dropdown
          options={[
            {
              icon: <MassaToken size={32} />,
              item: "account 1 name",
              onClick: () => console.log("option 1"),
            },
            { icon: <MassaLogo size={32} />, item: "account 2 name" },
            { icon: <MassaLogo size={32} />, item: "account 3 name" },
            { icon: <MassaLogo size={32} />, item: "account 4 name" },
            { icon: <MassaLogo size={32} />, item: "account 5 name" },
            { icon: <MassaLogo size={32} />, item: "account 6 name" },
          ]}
        />
      </div>

      <br />

      <div className="w-52">
        <Dropdown
          options={[
            {
              // We don't need to wrap the SVG in a DIV to be able to
              // use the className attr. We can use it direct on it like:
              // <FranceFlag className="w-7" /> however by some reason
              // in storybook is not working as expected. See:
              // https://github.com/gregberge/svgr/issues/473
              // In the real code it works fine
              icon: (
                <div className="w-7">
                  <FranceFlag />
                </div>
              ),
              item: "français",
              onClick: () => console.log("option 1"),
            },
            {
              icon: (
                <div className="w-7">
                  <UnitedStatesFlag />
                </div>
              ),
              item: "english",
            },
            {
              icon: (
                <div className="w-7">
                  <BrazilFlag />
                </div>
              ),
              item: "português",
            },
            {
              icon: (
                <div className="w-7">
                  <ItalyFlag />
                </div>
              ),
              item: "italiano",
            },
          ]}
        />
      </div>

      <br />

      <div className="w-52">
        <Dropdown
          size={"xs"}
          options={[
            {
              icon: (
                <div className="w-4">
                  <FranceFlag />
                </div>
              ),
              item: "français",
              onClick: () => console.log("option 1"),
            },
            {
              icon: (
                <div className="w-4">
                  <UnitedStatesFlag />
                </div>
              ),
              item: "english",
            },
            {
              icon: (
                <div className="w-7">
                  <BrazilFlag />
                </div>
              ),
              item: "português",
            },
            {
              icon: (
                <div className="w-7">
                  <ItalyFlag />
                </div>
              ),
              item: "italiano",
            },
          ]}
        />
      </div>

      <br />

      <div className="w-32">
        <Dropdown
          size={"xs"}
          options={[
            {
              icon: <MassaToken size={16} />,
              item: "MAS",
              onClick: () => console.log("option 1"),
            },
            { icon: <MassaLogo size={16} />, item: "MAS" },
            { icon: <MassaLogo size={16} />, item: "MAS" },
          ]}
        />
      </div>
    </>
  ),
};
