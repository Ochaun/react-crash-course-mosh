import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    //tags: ["tag1", "tag2", "tag3"]
  };
  //State stored as a seperate variable

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
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please Create a new tags"}
        {this.renderTags()}*/}
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
  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 });
  };

  //Conditional Rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //Dynamically renderd css
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // changing state attribute
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
