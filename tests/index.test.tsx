import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../pages/index';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Render the Homepage', () => {
    render(<Home />);

    const heading = screen.getByTestId('header');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Simple Weather App');
    expect(screen.getByTestId('now-button')).toBeInTheDocument();
    expect(screen.getByTestId('forecast-button')).toBeInTheDocument();
  });

  it('should navigate to the now page and display the header', async () => {
    render(<Home />);
    const nowButton = screen.getByTestId('now-button');
    fireEvent.click(nowButton);

    expect(mockRouter.asPath).toEqual('/now');
  });

  it('should navigate to the forecast page', async () => {
    render(<Home />);
    const forecastButton = screen.getByTestId('forecast-button');
    fireEvent.click(forecastButton);

    expect(mockRouter.asPath).toEqual('/forecast');
  });
});
