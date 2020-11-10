import { render, screen } from "@testing-library/react";
// import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";

import App from "./App";

// EnzymeAdapter.configure({ adapter: new EnzymeAdapter() });

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
