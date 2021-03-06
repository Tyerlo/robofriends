import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";

import * as reducers from "./reducer";

describe("searchRobots", () => {
  const initialSearch = {
    searchField: ""
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });
  it("should return the initial state", () => {
    expect(
      reducers.searchRobots(initialSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  };
  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com"
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: "123",
          name: "test",
          email: "test@gmail.com"
        }
      ],
      isPending: false
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "FAIL!"
      })
    ).toEqual({
      error: "FAIL!",
      robots: [],
      isPending: false
    });
  });
});
