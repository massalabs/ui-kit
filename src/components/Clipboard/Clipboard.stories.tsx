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

export const _Rawcontent = {
  render: () => (
    <Clipboard
      rawContent="this is the content"
      displayedContent="formatted content"
    />
  ),
};
