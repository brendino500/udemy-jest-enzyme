import { EnzymeAdapter } from "enzyme";
import React from "react";
import { shallow, mount } from "enzyme";

import successContext from "./successContext";

// a functional component that calls useSuccess for the tests
const FunctionalComponent = () => {
  successContext.useSuccess();
  return <div />;
};

test("useSucess throws error when not wrapped in SuccessProvider", () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow("useSuccess must be used within a SuccessProvider");
});

test("useSuccess does not throw error when wrapped in SuccessProvider", () => {
  expect(() => {
    mount(
      <successContext.SuccessProvider>
        <FunctionalComponent />
      </successContext.SuccessProvider>
    );
  }).not.toThrow();
});
