import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  //Lifecycle Hooks - Mounting Phase

  constructor(props) {
    super(props);
    console.log("App - Constructed");
    //this.state = this.props.something;
    // initialize props here
  }

  componentDidMount() {
    //Ajax calls and DB Queries go here
    console.log("App - Mounted");
  }

  //Lifecycle Hooks - Update
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    /*if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call or get new data
    } */
  }

  //Lifecycle Hooks - Unmount
  componentWillUnmount() {
    console.log("Counter - Unmount");
    // Timers and listeners removed here
  }

  render() {
    console.log("App - Rendered");
    return (
      <>
        {/* Step 5: Share the info as needed*/}
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            //Step 2: add handlers and needed objects
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
  // Step 1: Move state and all meths that modify state up the DOM tree
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
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //... operator copies all of the previous elements in obj/arr
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}

export default App;
