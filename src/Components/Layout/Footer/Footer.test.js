import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Ca devrait rendre le composant Footer', () => {
   it('should render footer component', () => {
      render(
      <Footer />
      )
      const footerContent = screen.getByRole('footer');
      expect(footerContent).toBeInTheDocument();
   })
})