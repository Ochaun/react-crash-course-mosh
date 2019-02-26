import React from "react";

//Stateless Functional Component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* Don't need to use `this` you can pull props directly*/}
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
