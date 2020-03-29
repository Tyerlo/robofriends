import React, { Component } from "react";
import CardList from "../components/Card/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import Header from "../components/Header";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filteredRobots = () => {
    const { searchField, robots } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };
  render() {
    const { onSearchChange, isPending, robots } = this.props;

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={this.filteredRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
