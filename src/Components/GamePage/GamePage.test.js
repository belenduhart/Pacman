import GamePage from "./GamePage";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<GamePage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});


it("Find Pacman after place it", () => {
  const PlaceAndReset = jest.fn();
  const wrapper = shallow(<GamePage onKeyDown={PlaceAndReset} />);
  wrapper.simulate("keydown", { key: "Enter", code: 13, charCode: 13 });
  expect(wrapper.find("div.position-zero")).toBeTruthy();
});



