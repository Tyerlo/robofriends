import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage.js";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});
it("render MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filter robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "a",
    isPending: true
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper.instance().filteredRobots()).toEqual([]);
  expect(wrapper2.instance().filteredRobots()).toEqual([]);
});
it("filter robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "a",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper2 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper.instance().filteredRobots()).toEqual([]);
  expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots);
});
