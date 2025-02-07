import { FiAirplay, FiInfo } from 'react-icons/fi';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

export default { title: 'Components/Tooltip', component: Tooltip };

export const DefaultTooltip = {
  render: () => (
    <>
      <Tooltip body={'Hello I am tooltip content'} />
    </>
  ),
};

export const TooltipWithCustomIcon = {
  render: () => (
    <>
      <Tooltip
        iconColor="text-s-error"
        body={<p>Hello I am tooltip content</p>}
      >
        <FiAirplay size={48} className="text-s-warning" />
      </Tooltip>
    </>
  ),
};

export const TooltipWithDifferentPlacements = {
  render: () => (
    <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
      <div className="flex justify-center gap-4">
        <Tooltip body={'Top-start'} placement="top-start">
          <Button>Top-start</Button>
        </Tooltip>
        <Tooltip body={'Top'} placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip body={'Top-end'} placement="top-end">
          <Button>Top-end</Button>
        </Tooltip>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start gap-4">
          <Tooltip body={'Left-start'} placement="left-start">
            <Button>Left-start</Button>
          </Tooltip>
          <Tooltip body={'Left'} placement="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip body={'Left-end'} placement="left-end">
            <Button>Left-end</Button>
          </Tooltip>
        </div>
        <div className="flex flex-col items-end gap-4">
          <Tooltip body={'Right-start'} placement="right-start">
            <Button>Right-start</Button>
          </Tooltip>
          <Tooltip body={'Right'} placement="right">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip body={'Right-end'} placement="right-end">
            <Button>Right-end</Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Tooltip body={'Bottom-start'} placement="bottom-start">
          <Button>Bottom-start</Button>
        </Tooltip>
        <Tooltip body={'Bottom'} placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip body={'Bottom-end'} placement="bottom-end">
          <Button>Bottom-end</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const TooltipWithOffset = {
  render: () => (
    <>
      <Tooltip
        body={'Hello, I am a tooltip with offset'}
        offset={{ top: 100, left: 100 }}
      >
        <FiInfo size={24} className="text-blue-500" />
      </Tooltip>
    </>
  ),
};
