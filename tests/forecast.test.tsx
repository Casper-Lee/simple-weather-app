import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Forecast from '../pages/forecast';
import { useGetWeatherForecast } from '@/hooks/weatherCustomHooks';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('../hooks/weatherCustomHooks', () => ({
  useGetWeatherForecast: jest.fn(),
}));

describe('Forecast', () => {
  it('renders a heading', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {
        items: [
          {
            date: '2024-07-30',
            prediction: 'Late Morning and early afternoon showers',
          },
          {
            date: '2024-07-31',
            prediction: 'Late Morning and early afternoon showers',
          },
        ],
      },
      isLoading: false,
    });

    render(<Forecast />);

    const heading = screen.getByTestId('header');

    expect(heading).toBeInTheDocument();
  });

  it('displays a loading is isLoading is true', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
    });

    render(<Forecast />);
    const loading = screen.getByTestId('loading-spinner');
    expect(loading).toBeTruthy();
  });
});
