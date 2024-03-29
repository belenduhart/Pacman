import Grid from "./Grid";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(<Grid />);
  expect(toJson(wrapper)).toMatchSnapshot();
});


