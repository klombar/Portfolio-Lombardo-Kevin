import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Moque le composant Nav
jest.mock('../../UI/Nav', () => () => <nav data-testid="mocked-nav"></nav>);

// Moque le composant Logo
jest.mock('../../UI/Logo', () => () => <div data-testid="mocked-logo"></div>);

describe('Header component', () => {
  test('renders the Header component', () => {
    render(<Header />);

    // Vérifie que le header est rendu
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    // Vérifie que les sous-composants moqués sont présents
    const mockedLogo = screen.getByTestId('mocked-logo');
    const mockedNav = screen.getByTestId('mocked-nav');
    expect(mockedLogo).toBeInTheDocument();
    expect(mockedNav).toBeInTheDocument();
  });
});
