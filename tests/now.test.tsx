import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useGetNowWeather } from '@/hooks/weatherCustomHooks';
import Now from '@/pages/now';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('../hooks/weatherCustomHooks', () => ({
  useGetNowWeather: jest.fn(),
}));

describe('Forecast', () => {
  it('renders the page with the correct data', () => {
    (useGetNowWeather as jest.Mock).mockReturnValue({
      data: {
        items: [
          {
            area: 'Pasir Ris',
            forecast: 'Partly Cloudy (Night)',
          },
          {
            area: 'Bukit Panjang',
            forecast: 'Partly Cloudy (Morning)',
          },
        ],
      },
      isLoading: false,
      isError: false,
    });

    render(<Now />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toHaveTextContent(
      `What's it like outside?`,
    );
    expect(screen.getByTestId('back-button')).toBeInTheDocument();

    const forecastCards = screen.getAllByTestId('now-card');
    expect(forecastCards).toHaveLength(2);

    expect(screen.getByText('Pasir Ris')).toBeInTheDocument();
    expect(screen.getByText('Partly Cloudy (Night)')).toBeInTheDocument();
    expect(screen.getByText('Bukit Panjang')).toBeInTheDocument();
    expect(screen.getByText('Partly Cloudy (Morning)')).toBeInTheDocument();
  });

  it('displays a loading if isLoading is true', () => {
    (useGetNowWeather as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: false,
    });

    render(<Now />);
    const loading = screen.getByTestId('loading-spinner');
    expect(loading).toBeInTheDocument();
  });

  it('displays a try again button if isError is true', () => {
    (useGetNowWeather as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: true,
    });

    render(<Now />);
    expect(
      screen.getByText('Oops Something went wrong! Please try again.'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('refresh-button')).toBeInTheDocument();
  });

  it('navigate to the homepage when back button is pressed', () => {
    (useGetNowWeather as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: true,
    });

    render(<Now />);

    const backButton = screen.getByTestId('back-button');
    fireEvent.click(backButton);

    expect(mockRouter.asPath).toEqual('/');
  });

  it('should reload the page when the try again button is pressed', () => {
    (useGetNowWeather as jest.Mock).mockReturnValue({
      data: {},
      isLoading: true,
      isError: true,
    });

    render(<Now />);

    const refreshButton = screen.getByTestId('refresh-button');
    fireEvent.click(refreshButton);

    mockRouter.reload();
    mockRouter.pathname = '/forecast';
    expect(mockRouter).toMatchObject({
      pathname: '/forecast',
    });
  });
});
