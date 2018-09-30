import React, { Component } from "react";
import FlightResult from "./flightResult";
import AddFlight from "./addFlight";

class FlightResults extends Component {
  //I didn't use date object for simplcity reason (I was not asked to filter/sort by date)
  state = {
    nFlight: {
      id: "",
      from: "",
      to: "",
      depTime: "",
      landTime: "",
      price: 490,
      aircraft: "Boeing 737-400"
    },
    flights: [
      {
        id: "0LAX",
        from: "LAX",
        to: "SFO",
        depTime: "4:00AM",
        landTime: "10:00AM",
        price: 400,
        aircraft: "Airbus A380"
      },
      {
        id: "0LAX1",
        from: "LAX",
        to: "JFK",
        depTime: "2:00AM",
        landTime: "8:00AM",
        price: 430,
        aircraft: "Airbus A320-200"
      },
      {
        id: "0LAX2",
        from: "LAX",
        to: "BKK",
        depTime: "4:00AM",
        landTime: "12:00PM",
        price: 350,
        aircraft: "Airbus A330"
      },
      {
        id: "0L3AX",
        from: "TLV",
        to: "SFO",
        depTime: "4:00AM",
        landTime: "11:00AM",
        price: 1400,
        aircraft: "Boeing 787-900 Dreamliner"
      },
      {
        id: "0L4AX",
        from: "LAX",
        to: "SFO",
        depTime: "4:30AM",
        landTime: "10:30AM",
        price: 0,
        aircraft: "Boeing 737-400"
      }
    ]
  };
  //Don't judge me for creating to many methods in a rush pls :(
  handleIdChange = e => {
    let nFlight = { ...this.state.nFlight };
    console.log(e);
  };
  handleFromChange = e => {
    let nFlight = { ...this.state.nFlight };
    nFlight.from = e.traget.value;
    this.setState({ nFlight });
  };
  handleToChange = e => {
    let nFlight = { ...this.state.nFlight };
    nFlight.to = e.traget.value;
    this.setState({ nFlight });
  };
  handleDepartureChange = e => {
    let nFlight = { ...this.state.nFlight };
    nFlight.depTime = e.traget.value;
    this.setState({ nFlight });
  };
  handleLandingChange = e => {
    let nFlight = { ...this.state.nFlight };
    nFlight.landTime = e.traget.value;
    this.setState({ nFlight });
  };
  handlePriceChange = e => {
    let nFlight = { ...this.state.nFlight };
    nFlight.price = e.traget.value;
    this.setState({ nFlight });
  };
  handleAddFlight = e => {
    e.preventDefault();
    let flights = [...this.state.flights];
    flights.push(this.state.nFlight);
    this.setState({ flights });
  };
  getDestinations = () => {
    let destList = [];
  };
  render() {
    if (this.props.flights !== undefined) {
      this.setState({ flights: this.props.flights });
    }
    return (
      <React.Fragment>
        <h1 className="center">Flights List:</h1>
        <select>
          <option value="test">Not Ready : Todo</option>
        </select>
        <div className="container">
          <div className="row">
            <div className="list-group m-1 left col-sm">
              {this.state.flights.map(result => (
                <FlightResult key={result.id} flightResult={result} />
              ))}
            </div>
            <div className="col-sm">
              <AddFlight
                onAdd={this.handleAddFlight}
                onIdChange={this.handleIdChange}
                onFromChange={this.handleFromChange}
                onToChange={this.handleToChange}
                onDepChange={this.handleDepartureChange}
                onLandChange={this.handleLandingChange}
                onPriceChange={this.handlePriceChange}
                nFlight={this.state.nFlight}
              >
                <h2>Add Fligth</h2>
              </AddFlight>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlightResults;
