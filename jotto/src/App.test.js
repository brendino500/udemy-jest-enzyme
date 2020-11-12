import { render, screen } from "@testing-library/react";
// import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import { shallow } from "enzyme";
import { findByTestAtt, findByTestAttr } from "../test/testUtils";

import App from "./App";

// EnzymeAdapter.configure({ adapter: new EnzymeAdapter() });
/**
 * Setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
