import React, { Component } from "react";
import Counter from "../components/counter";

export default class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <>
        {/* Map every element in array to a JSX obj with a key*/}
        {this.state.counters.map(counter => (
          <Counter key={counter.id} />
        ))}
      </>
    );
  }
}
