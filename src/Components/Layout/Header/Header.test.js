import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('../../UI/Nav/Nav.jsx', () => () => <nav data-testid="mocked-nav"></nav>);

jest.mock('../../UI/Logo/Logo.jsx', () => () => <div data-testid="mocked-logo"></div>);

describe('Header component', () => {
  test('renders the Header component', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const mockedLogo = screen.getByTestId('mocked-logo');
    const mockedNav = screen.getByTestId('mocked-nav');
    expect(mockedLogo).toBeInTheDocument();
    expect(mockedNav).toBeInTheDocument();
  });
});
