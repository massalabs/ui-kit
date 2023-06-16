import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DashboardStation } from './DashboardStation';

describe('Components | DashboardStation', () => {
  test('it should render', () => {
    render(
      <DashboardStation
        imagesDark={[null]}
        imagesLight={[null]}
        components={[null]}
      />,
    );

    let dashboardStation = screen.getByTestId('dashboard-station');

    expect(dashboardStation).toBeInTheDocument();
  });
});
