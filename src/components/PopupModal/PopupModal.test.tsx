import { render, screen, within, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  PopupModal,
  PopupModalHeader,
  PopupModalContent,
  PopupModalFooter,
} from './PopupModal';

describe('Components | PopupModal', () => {
  test('it should render', () => {
    render(
      <PopupModal>
        <PopupModalHeader>The Title</PopupModalHeader>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
        <PopupModalFooter>
          <label className="text-f-primary">that's footer</label>
        </PopupModalFooter>
      </PopupModal>,
    );

    let popupModal = screen.getByTestId('popup-modal');
    let popupModalHeader = screen.getByTestId('popup-modal-header');
    let popupModalContent = screen.getByTestId('popup-modal-content');
    let popupModalFooter = screen.getByTestId('popup-modal-footer');

    expect(popupModal).toBeInTheDocument();
    expect(popupModalHeader).toBeInTheDocument();
    expect(popupModalContent).toBeInTheDocument();
    expect(popupModalFooter).toBeInTheDocument();
  });

  test('it should render without header', () => {
    render(
      <PopupModal>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
        <PopupModalFooter>
          <label className="text-f-primary">that's footer</label>
        </PopupModalFooter>
      </PopupModal>,
    );

    let popupModal = screen.getByTestId('popup-modal');
    let popupModalHeader =
      within(popupModal).queryByTestId(/popup-modal-header/);

    expect(popupModal).toBeInTheDocument();
    expect(popupModalHeader).toBeNull();
  });

  test('it should render without footer', () => {
    render(
      <PopupModal>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
      </PopupModal>,
    );

    let popupModal = screen.getByTestId('popup-modal');
    let popupModalFooter =
      within(popupModal).queryByTestId(/popup-modal-footer/);

    expect(popupModal).toBeInTheDocument();
    expect(popupModalFooter).toBeNull();
  });

  test('it should fire onOpen event', () => {
    const onOpenEvent = jest.fn();

    render(
      <PopupModal onOpen={onOpenEvent}>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
      </PopupModal>,
    );

    let popupModal = screen.getByTestId('popup-modal');

    fireEvent.click(popupModal);
    expect(onOpenEvent).toHaveBeenCalled();
  });

  test('it should fire onClose event', () => {
    const onCloseEvent = jest.fn();

    render(
      <PopupModal onClose={onCloseEvent}>
        <PopupModalHeader>The Title</PopupModalHeader>
        <PopupModalContent>
          <label className="text-f-primary">any content</label>
        </PopupModalContent>
      </PopupModal>,
    );

    let popupModalCloseButton = screen.getByTestId('popup-modal-header-close');

    fireEvent.click(popupModalCloseButton);
    expect(onCloseEvent).toHaveBeenCalled();
  });
});
