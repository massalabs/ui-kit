import { Clipboard } from './Clipboard';

export default { title: 'Components/Clipboard', component: Clipboard };

export const _Clipboard = {
  render: () => (
    <Clipboard
      displayedContent="AU121SVmHtJ4tWcFB1eFvcZ7mqp9rDPJ2QkP5TJPeHZE3Kr7uxLV6"
      rawContent="this is the content"
      error="Oupps!"
      success="Copied!"
    />
  ),
};
