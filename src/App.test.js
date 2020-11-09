import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";

import App from "./App";

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAtt = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

// test("renders without crashing", () => {
//   const wrapper = shallow(<App />); // shallow rendering
//   console.log(wrapper.debug()); // log debug as a String
//   expect(wrapper).toBeTruthy(); // throw an error is assertion is FALSE
// });

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAtt(wrapper, "component-app"); // finds the attribute to test. Finds every element which matches
  expect(appComponent.length).toBe(1); // finds the first one.
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAtt(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAtt(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {});

test("clicking on button increments counter display", () => {});
