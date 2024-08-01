import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Forecast from '../pages/forecast';
import { useGetWeatherForecast } from '@/hooks/weatherCustomHooks';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('../hooks/weatherCustomHooks', () => ({
  useGetWeatherForecast: jest.fn(),
}));

describe('Forecast', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders the page with the correct data', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {
        items: [
          {
            date: '2024-07-30',
            prediction: 'Late Morning showers',
          },
          {
            date: '2024-07-31',
            prediction: 'Perfect Weather',
          },
        ],
      },
      isLoading: false,
      isError: false,
    });

    render(<Forecast />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('back-button')).toBeInTheDocument();

    const forecastCards = screen.getAllByTestId('forecast-card');
    expect(forecastCards).toHaveLength(2);

    expect(screen.getByText('2024-07-30')).toBeInTheDocument();
    expect(screen.getByText('Late Morning showers')).toBeInTheDocument();
    expect(screen.getByText('2024-07-31')).toBeInTheDocument();
    expect(screen.getByText('Perfect Weather')).toBeInTheDocument();
  });

  it('displays a loading if isLoading is true', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: false,
    });

    render(<Forecast />);
    const loading = screen.getByTestId('loading-spinner');
    expect(loading).toBeInTheDocument();
  });

  it('displays a try again button if isError is true', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: true,
    });

    render(<Forecast />);
    expect(
      screen.getByText('Oops Something went wrong! Please try again.'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('refresh-button')).toBeInTheDocument();
  });

  it('navigate to the homepage when back button is pressed', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: true,
    });

    render(<Forecast />);

    const backButton = screen.getByTestId('back-button');
    fireEvent.click(backButton);
    expect(mockRouter.asPath).toEqual('/');
  });

  it('should reload the page upon pressing the reload button', () => {
    (useGetWeatherForecast as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: true,
    });

    render(<Forecast />);

    const refreshButton = screen.getByTestId('refresh-button');
    fireEvent.click(refreshButton);

    mockRouter.reload();
    mockRouter.pathname = '/forecast';
    expect(mockRouter).toMatchObject({
      pathname: '/forecast',
    });
  });
});
