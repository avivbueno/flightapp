import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import FlightResults from "./components/flightResults";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={Login} exact />
          <Route path="/results" component={FlightResults} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
