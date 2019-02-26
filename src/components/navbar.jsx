import React from "react";

//Stateless Functional Component

// Object destructuring allows for pulling specific props
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://github.com/OEMarshall" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* Makes code cleaner since you don't need `props.`
                or `this.props` everywhere */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
