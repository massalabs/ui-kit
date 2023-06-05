import {
  PopupModal,
  PopupModalContent,
  PopupModalHeader,
  PopupModalFooter,
} from './PopupModal';

export default { title: 'Components/PopupModal' };

const args = {
  onOpen: () => {
    console.log('event on open');
  },
  onClose: () => {
    console.log('event on close');
  },
};

export const _Regular = {
  render: () => (
    <div className="h-[450px]">
      <PopupModal onOpen={args.onOpen} onClose={args.onClose}>
        <PopupModalHeader>
          <label className="text-f-primary">The title</label>
        </PopupModalHeader>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
        <PopupModalFooter>
          <label className="text-f-primary">that's footer</label>
        </PopupModalFooter>
      </PopupModal>
    </div>
  ),
};

export const _NoHeader = {
  render: () => (
    <div className="h-[450px]">
      <PopupModal onOpen={args.onOpen}>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
        <PopupModalFooter>
          <label className="text-f-primary">that's footer</label>
        </PopupModalFooter>
      </PopupModal>
    </div>
  ),
};

export const _NoFooter = {
  render: () => (
    <div className="h-[450px]">
      <PopupModal onOpen={args.onOpen} onClose={args.onClose}>
        <PopupModalHeader>
          <label className="text-f-primary">The title</label>
        </PopupModalHeader>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
      </PopupModal>
    </div>
  ),
};

export const _FullMode = {
  render: () => (
    <div className="w-[750px]">
      <PopupModal fullMode={true}>
        <PopupModalHeader>
          <label className="text-f-primary">The title</label>
        </PopupModalHeader>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
        <PopupModalFooter>
          <label className="text-f-primary">that's footer</label>
        </PopupModalFooter>
      </PopupModal>
    </div>
  ),
};
