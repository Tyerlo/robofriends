import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("expect to render counter component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });

  expect(wrapper.props().color).toEqual("red");
});
