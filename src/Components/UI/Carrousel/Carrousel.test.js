import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Carrousel from './Carrousel';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, image: 'image1.jpg', alt: 'Slide 1', title: 'Projet 1', description: 'Description 1', difficultyRating: '3/5', link: '#' },
          { id: 2, image: 'image2.jpg', alt: 'Slide 2', title: 'Projet 2', description: 'Description 2', difficultyRating: '4/5', link: '#' },
        ]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Carrousel component with images', () => {
  it('Should render the first image with correct alt text', async () => {
    render(
      <MemoryRouter>
        <Carrousel />
      </MemoryRouter>
    );

    const image = await screen.findByAltText('Slide 1');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image1.jpg');
  });
});
