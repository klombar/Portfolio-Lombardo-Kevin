import React from 'react';
import Main from './Main';
import { render, screen } from '@testing-library/react';

describe('rendu du composant Main', ()=> {
   it('devrait rendre le composant Main', ()=> {
      render(
         <Main>
            <div>
               Test
            </div>
         </Main>
      );

      const mainElement = screen.getByRole('main');
      const ChildTestElement = screen.getByText("Test");
      expect(mainElement).toBeInTheDocument();
      expect(ChildTestElement).toBeInTheDocument();
   })
})