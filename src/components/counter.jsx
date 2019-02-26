import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <span
          style={{
            fontSize: 10,
            fontWeight: "bold"
          }} //Single line CSS styles
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </>
    );
  }
  /*
  // Req to use this in other methods
  // Not Req if you convert fucntions into arrow functions
  constructor() {
    super();
    this.handleIncrement.bind(this);
  }
*/

  //Dynamically renderd css
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // changing state attribute
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
