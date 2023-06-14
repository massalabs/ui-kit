import { Clipboard } from './Clipboard';

export default { title: 'Components/Clipboard', component: Clipboard };

export const _Clipboard = {
  render: () => (
    <Clipboard
      displayedContent="formatted content"
      rawContent="this is the content"
      error="Oupps!"
      success="Copied!"
    />
  ),
};
