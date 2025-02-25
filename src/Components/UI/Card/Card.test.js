import React from "react";
import Card from "./Card";
import { render, screen } from "@testing-library/react";

describe("Card component", () => {

   it("Should render a card", () => {

      render(<Card name="Lombardo Kevin" age="38 ans" location="Arpajon" className='className' image="image.jpg"/>);

      expect(screen.getByText("Lombardo Kevin")).toBeInTheDocument();
      expect(screen.getByText("38 ans")).toBeInTheDocument();
      expect(screen.getByText("Arpajon")).toBeInTheDocument();
   })
})