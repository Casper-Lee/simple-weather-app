import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId('header');

    expect(heading).toBeInTheDocument();
  });
});
