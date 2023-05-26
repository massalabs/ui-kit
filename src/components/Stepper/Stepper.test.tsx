import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { Stepper } from '.';

describe('Components | Stepper', () => {
  test('it should render', () => {
    render(<Stepper step={0} steps={['one', 'two', 'three']} />);

    let stepper = screen.getByTestId('stepper');

    expect(stepper).toBeInTheDocument();
  });

  test('it has the first step in stepIn mode', () => {
    render(<Stepper step={0} steps={['one', 'two', 'three']} />);

    let step0 = screen.getByTestId('stepper-item-0');
    let stepIn = within(step0).getByTestId('stepper-step-in');

    expect(stepIn).toBeInTheDocument();
  });

  test('it has the 1st step as StepPast mode, the 2nd in stepIn and 3rd as StepNext', () => {
    render(<Stepper step={1} steps={['one', 'two', 'three']} />);

    let step0 = screen.getByTestId('stepper-item-0');
    let step1 = screen.getByTestId('stepper-item-1');
    let step2 = screen.getByTestId('stepper-item-2');

    let stepPast = within(step0).getByTestId('stepper-step-past');
    let stepIn = within(step1).getByTestId('stepper-step-in');
    let stepNext = within(step2).getByTestId('stepper-step-next');

    expect(stepIn).toBeInTheDocument();
    expect(stepPast).toBeInTheDocument();
    expect(stepNext).toBeInTheDocument();
  });
});
