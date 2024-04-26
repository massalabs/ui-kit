import { Dropdown } from './Dropdown';
import { MassaLogo } from '../Icons/Svg/Massa/MassaLogo';
import FranceFlag from './../../assets/flags/france.svg';
import UnitedStatesFlag from '../../assets/flags/unitedStates.svg';
import ItalyFlag from '../../assets/flags/italy.svg';
import BrazilFlag from '../../assets/flags/brazil.svg';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const _Dropdown = {
  render: () => (
    <>
      <div className="w-64">
        <Dropdown
          options={[
            {
              icon: (
                <MassaLogo size={32} className="bg-c-default rounded-full" />
              ),
              item: 'account 1 name',
              onClick: () => console.log('option 1'),
            },
            {
              icon: <MassaLogo size={32} />,
              item: 'account 2 name with a biiiiig content',
            },
            { icon: <MassaLogo size={32} />, item: 'account 3 name' },
            { icon: <MassaLogo size={32} />, item: 'account 4 name' },
            { icon: <MassaLogo size={32} />, item: 'account 5 name' },
            { icon: <MassaLogo size={32} />, item: 'account 6 name' },
          ]}
        />

        <br />

        <Dropdown
          readOnly={true}
          options={[
            {
              icon: (
                <MassaLogo size={32} className="bg-c-default rounded-full" />
              ),
              item: 'account 1 name',
              onClick: () => console.log('option 1'),
            },
            {
              icon: <MassaLogo size={32} />,
              item: 'account 2 name with a biiiiig content',
            },
            { icon: <MassaLogo size={32} />, item: 'account 3 name' },
            { icon: <MassaLogo size={32} />, item: 'account 4 name' },
            { icon: <MassaLogo size={32} />, item: 'account 5 name' },
            { icon: <MassaLogo size={32} />, item: 'account 6 name' },
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
              item: 'français',
              onClick: () => console.log('option 1'),
            },
            {
              icon: (
                <div className="w-7">
                  <UnitedStatesFlag />
                </div>
              ),
              item: 'english',
            },
            {
              icon: (
                <div className="w-7">
                  <BrazilFlag />
                </div>
              ),
              item: 'português',
            },
            {
              icon: (
                <div className="w-7">
                  <ItalyFlag />
                </div>
              ),
              item: 'italiano',
            },
          ]}
        />
      </div>

      <br />

      <div className="w-52">
        <Dropdown
          size={'xs'}
          options={[
            {
              icon: (
                <div className="w-4">
                  <FranceFlag />
                </div>
              ),
              item: 'français',
              onClick: () => console.log('option 1'),
            },
            {
              icon: (
                <div className="w-4">
                  <UnitedStatesFlag />
                </div>
              ),
              item: 'english',
            },
            {
              icon: (
                <div className="w-4">
                  <BrazilFlag />
                </div>
              ),
              item: 'português',
            },
            {
              icon: (
                <div className="w-4">
                  <ItalyFlag />
                </div>
              ),
              item: 'italiano',
            },
          ]}
          select={2}
        />
      </div>

      <br />

      <div className="w-32">
        <Dropdown
          size={'xs'}
          options={[
            {
              icon: (
                <MassaLogo size={16} className="bg-c-default rounded-full" />
              ),
              item: 'MAS',
              onClick: () => console.log('option 1'),
            },
            { icon: <MassaLogo size={16} />, item: 'MAS' },
            { icon: <MassaLogo size={16} />, item: 'MAS' },
          ]}
        />

        <br />

        <Dropdown
          size={'xs'}
          options={[
            {
              icon: (
                <MassaLogo size={16} className="bg-c-default rounded-full" />
              ),
              item: 'MAS',
              onClick: () => console.log('option 1'),
            },
            { icon: <MassaLogo size={16} />, item: 'MAS' },
            { icon: <MassaLogo size={16} />, item: 'MAS' },
          ]}
          defaultItem={{ item: 'Select a token' }}
        />

        <br />

        <Dropdown
          size={'xs'}
          readOnly={true}
          options={[
            {
              icon: (
                <MassaLogo size={16} className="bg-c-default rounded-full" />
              ),
              item: 'MAS',
              onClick: () => console.log('option 1'),
            },
            { icon: <MassaLogo size={16} />, item: 'MAS' },
            { icon: <MassaLogo size={16} />, item: 'MAS' },
          ]}
        />
      </div>

      <br />

      {/* custom item */}
      <div className="w-[300px]">
        <Dropdown
          options={[
            {
              icon: (
                <MassaLogo size={32} className="bg-c-default rounded-full" />
              ),
              item: <CustomItem title="account 1 name" subtitle="subtitle" />,
              itemPreview: 'account 1 name',
              onClick: () => console.log('option 1'),
            },
            {
              icon: <MassaLogo size={32} />,
              item: <CustomItem title="account 2 name" subtitle="subtitle" />,
              itemPreview: 'account 2 name',
            },
            {
              icon: <MassaLogo size={32} />,
              item: <CustomItem title="3 name" subtitle="nothing" />,
              itemPreview: '3 name',
            },
            {
              icon: <MassaLogo size={32} />,
              item: <CustomItem title="4 name" subtitle="nothing" />,
              itemPreview: '4 name',
            },
          ]}
        />
      </div>

      <br />
    </>
  ),
};

function CustomItem(props: { title: string; subtitle: string }) {
  return (
    <>
      <p>{props.title}</p>
      <p className="text-sm text-gray-500">{props.subtitle}</p>
    </>
  );
}
