import React, { Component } from "react";
import FlightResult from "./flightResult";

class FlightResults extends Component {
  //I didn't use date object for simplcity reason (I was not asked to filter/sort by date)
  state = {
    nFlight: {
      id: "",
      from: "",
      to: "",
      depTime: "",
      landTime: "",
      price: 0,
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
        id: "0L4AX-CREWSTANDBY",
        from: "LAX",
        to: "SFO",
        depTime: "4:30AM",
        landTime: "10:30AM",
        price: 0,
        aircraft: "Boeing 737-400"
      }
    ],
    destinations: ["All"],
    aircrafts: [
      "Boeing 737-400",
      "Boeing 787-900 Dreamliner",
      "Airbus A330",
      "Airbus A320-200",
      "Airbus A380"
    ],
    //Mutable version of flights for filtering
    mFlights: [],
    selectedDst: "All"
  };
  //Don't judge me for creating to many methods in a rush pls :(
  handleInputChange = e => {
    const target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    if (target.type === "number") {
      value = parseInt(value, 10);
    }
    const name = target.name;
    let nFlight = { ...this.state.nFlight };
    nFlight[name] = value;
    this.setState({ nFlight: nFlight });
  };

  handleAddFlight = e => {
    if (!e.target.checkValidity()) {
      // form is invalid! so we do nothing
      return;
    }
    e.preventDefault();
    let flights = [...this.state.flights];
    const nFlight = { ...this.state.nFlight };
    const exsits = this.state.flights.filter(
      flight => flight.id === nFlight.id
    );
    if (exsits.length > 0) {
      alert("A flight with the same id exsits");
    } else {
      flights.push(nFlight);
      this.setState({ flights }, this.updateDestinations);
      this.setState({
        nFlight: {
          id: "",
          from: "",
          to: "",
          depTime: "",
          landTime: "",
          price: 0,
          aircraft: "Boeing 737-400"
        }
      });
      this.updateFilterFlights(nFlight);
      this.addFlightForm.reset();
    }
    return true;
  };
  updateFilterFlights = flight => {
    if (flight.to === this.state.selectedDst) {
      const mFlights = [...this.state.mFlights];
      mFlights.push(flight);
      this.setState({ mFlights });
    }
  };
  updateDestinations = () => {
    let destinations = [...this.state.destinations];
    this.state.flights.map(flight => {
      if (!destinations.includes(flight.to)) {
        destinations.push(flight.to);
      }
      return true;
    });
    this.setState({ destinations });
    return true;
  };
  handleFilter = e => {
    if (e.target.value === "All") {
      this.setState({ mFlights: [...this.state.flights] });
    } else {
      const mFlights = [...this.state.flights].filter(
        flight => flight.to === e.target.value
      );
      this.setState({ mFlights });
    }
    this.setState({ selectedDst: e.target.value });
  };
  componentDidMount() {
    this.updateDestinations();
    this.setState({ mFlights: [...this.state.flights] });
  }
  render() {
    if (this.props.flights !== undefined) {
      this.setState({ flights: this.props.flights });
    }
    //this.updateDestinations();
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h1 className="center">Flights List:</h1>
            <select className="float-right" onChange={this.handleFilter}>
              {this.state.destinations.map(flightDestination => (
                <option key={flightDestination} value={flightDestination}>
                  {flightDestination}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <div className="list-group m-1 left col-sm">
              {this.state.mFlights.map(result => (
                <FlightResult key={result.id} flightResult={result} />
              ))}
            </div>
            <div className="col-sm">
              <h2>Add Fligth</h2>
              <form
                ref={el => (this.addFlightForm = el)}
                onSubmit={this.handleAddFlight}
              >
                <div className="form-group">
                  <label>Flight Code</label>
                  <input
                    name="id"
                    type="text"
                    className="form-control"
                    id="flightCode"
                    placeholder="Enter flight code"
                    required="required"
                    defaultValue={this.state.nFlight.id}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>From</label>
                  <input
                    name="from"
                    type="text"
                    className="form-control"
                    id="from"
                    placeholder="Enter from airport code"
                    required="required"
                    defaultValue={this.state.nFlight.from}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>To</label>
                  <input
                    name="to"
                    type="text"
                    className="form-control"
                    id="to"
                    placeholder="Enter to airport code"
                    required="required"
                    defaultValue={this.state.nFlight.to}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Departure</label>
                  <input
                    name="depTime"
                    type="text"
                    className="form-control"
                    id="dep"
                    placeholder="Enter departure time"
                    required="required"
                    defaultValue={this.state.nFlight.depTime}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Landing</label>
                  <input
                    name="landTime"
                    type="text"
                    className="form-control"
                    id="landing"
                    placeholder="Enter landing time"
                    required="required"
                    defaultValue={this.state.nFlight.landTime}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Price(USD$ - Economy)</label>
                  <input
                    name="price"
                    type="number"
                    min="0"
                    className="form-control"
                    id="price"
                    placeholder="Enter price"
                    required="required"
                    defaultValue={this.state.nFlight.price}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group row">
                  <label>Aircraft</label>
                  <select name="aircraft" onChange={this.handleInputChange}>
                    {this.state.aircrafts.map(aircraft => (
                      <option key={aircraft} value={aircraft}>
                        {aircraft}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Flight
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlightResults;
