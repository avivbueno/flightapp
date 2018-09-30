import React, { Component } from "react";

class FlightResult extends Component {
  state = {};
  render() {
    return (
      <a className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">#{this.props.flightResult.id}</h5>
          <small>
            {this.props.flightResult.from}>{this.props.flightResult.to}
          </small>
        </div>
        <p className="mb-1">
          Departure: {this.props.flightResult.depTime}
          <br />
          Landing: {this.props.flightResult.landTime}
          <br />
          {this.props.flightResult.price}$
        </p>
        <small>Aircraf: {this.props.flightResult.aircraft}.</small>
      </a>
    );
  }
}

export default FlightResult;
