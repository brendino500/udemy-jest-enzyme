import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// test("renders without crashing", () => {
//   const wrapper = shallow(<App />); // shallow rendering
//   console.log(wrapper.debug()); // log debug as a String
//   expect(wrapper).toBeTruthy(); // throw an error is assertion is FALSE
// });

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']"); // finds the attribute to test. Finds every element which matches
  expect(appComponent.length).toBe(1); // finds the first one.
});

test("renders button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {});

test("clicking on button increments counter display", () => {});
