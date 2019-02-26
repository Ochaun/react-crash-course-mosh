import React, { Component } from "react";
import Counter from "../components/counter";

export default class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    //remove the given counter from state
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <>
        {/* Map every element in array to a JSX obj with a key*/}
        {this.state.counters.map(counter => (
          <Counter key={counter.id} counter={counter} />
        ))}
      </>
    );
  }
}
