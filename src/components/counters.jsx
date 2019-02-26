import React, { Component } from "react";
import Counter from "../components/counter";

export default class counters extends Component {
  render() {
    return (
      <>
        {/* Step 4: Change 'this.state' to 'this.props'*/}
        {this.props.counters.map(counter => (
          <Counter
            // Step 3: Modify `this.handler` structure to `this.props` instead
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </>
    );
  }
}
