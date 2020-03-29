import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };
  render() {
    const { count } = this.state;

    return (
      <button id="counter" color={"red"} onClick={this.updateCount}>
        Count: {count}
      </button>
    );
  }
}
export default CounterButton;
