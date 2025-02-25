import React from 'react';
import Button from './Button.jsx';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("button", () => {

   const link = "https://example.com";

   it('should render a button', () => {
      render(<Button classname='button'>click me</Button>);
      expect(screen.getByText('click me')).toBeInTheDocument();
   });


   if(link){

      it("should render a link", () => {
         render(<a href={link}>link</a>)
         expect (screen.getByRole('link')).toBeInTheDocument();
      })

   }


   it('should call onClick on button clickl', async () => {

      const handleClick = jest.fn();

      render(<button onClick={handleClick}>click me</button>);
      
      const button = screen.getByRole('button', { name : /click me/i });
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
   })


   it('should get the focus when tabbed', async () => {
      render(<button>click me</button>);
      await userEvent.tab();
      expect (screen.getByRole('button', { name: /click me/i })).toHaveFocus();
   })


   it('should call onClick when pressed Enter or Space', async () => {
      const handleClick = jest.fn();    
      
      render(<button onClick={handleClick}>click me</button>);

      const button = screen.getByRole('button', { name: /click me/i })
      button.focus();

      await userEvent.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1);

      await userEvent.keyboard('{Space}')
      expect(handleClick).toHaveBeenCalledTimes(1);
})

})