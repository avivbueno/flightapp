import React, { Component } from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} className="App-logo" alt="logo" width="50" /> Simple
          Flight Search App With React
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
