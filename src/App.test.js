import React from "react";
import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without errors", () => {
  const wrapper = shallow(<App />);
  const component = wrapper.find("[data-test='component-app ']");
  expect(component.length).toBe(1);
});

test("render increment button", () => {});

test("render display counter", () => {});

test("counter starts at 0", () => {});

test("clicking the button increments the counter", () => {});
