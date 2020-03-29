import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("expect to render card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "JON SNOW",
      userName: "John John",
      email: "john@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
