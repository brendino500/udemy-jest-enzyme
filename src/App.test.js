import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />); // shallow rendering
  console.log(wrapper.debug()); // log debug as a String
  expect(wrapper).toBeTruthy(); // throw an error is assertion is FALSE
});
