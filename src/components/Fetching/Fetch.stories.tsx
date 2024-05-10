// https://react-icons.github.io/react-icons/icons?name=fi
// https://github.com/react-icons/react-icons

import { FetchingLine, FetchingRound, FetchingStatus } from './Fetching';

export default {
  title: 'Components/Fetching',
};

// to render the icon
// set icon color, size... etc using className and then normal tailwind presents
export const _FetchingRound = {
  render: () => (
    <div data-testid="fi-sun">
      <FetchingRound />
    </div>
  ),
};

export const _FetchingLine = {
  render: () => (
    <div data-testid="fi-sun">
      <FetchingLine />
    </div>
  ),
};

export const _CustomFetchingLine = {
  render: () => (
    <div data-testid="fetching-line">
      <FetchingLine height={4} width={32} />
    </div>
  ),
};

export const _FetchingStatus = {
  render: () => (
    <div data-testid="fi-sun">
      <FetchingStatus>
        <p>foo</p>
      </FetchingStatus>
    </div>
  ),
};
