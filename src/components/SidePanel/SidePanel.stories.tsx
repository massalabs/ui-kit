import { SidePanel } from './SidePanel';

export default { title: 'Components/SidePanel' };

export const _SidePanelLeft = {
  render: () => (
    <SidePanel
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
    >
      <div className="flex h-full items-center">That's a side panel</div>
    </SidePanel>
  ),
};

export const _SidePanelRight = {
  render: () => (
    <SidePanel
      side="left"
      onOpen={() => console.log('opened')}
      onClose={() => console.log('closed')}
    >
      <div className="flex h-full items-center">That's a side panel</div>
    </SidePanel>
  ),
};
