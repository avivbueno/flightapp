import React, { Component } from "react";

class AddFlight extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <form onSubmit={this.props.onAdd}>
          <div className="form-group">
            <label for="flightCode">Flight Code</label>
            <input
              type="text"
              className="form-control"
              id="flightCode"
              placeholder="Enter flight code"
              required="required"
              value={this.props.nFlight.id}
              onChange={this.props.onIdChange}
            />
          </div>
          <div className="form-group">
            <label for="from">From</label>
            <input
              type="text"
              className="form-control"
              id="from"
              placeholder="Enter from airport code"
              required="required"
              value={this.props.nFlight.from}
              onChange={this.props.onFromChange}
            />
          </div>
          <div className="form-group">
            <label for="from">To</label>
            <input
              type="text"
              className="form-control"
              id="to"
              placeholder="Enter to airport code"
              required="required"
              value={this.props.nFlight.to}
              onChange={this.props.onToChange}
            />
          </div>
          <div className="form-group">
            <label for="dep">Departure</label>
            <input
              type="text"
              className="form-control"
              id="dep"
              placeholder="Enter departure time"
              required="required"
              value={this.props.nFlight.depTime}
              onChange={this.props.onDepChange}
            />
          </div>
          <div className="form-group">
            <label for="landing">Landing</label>
            <input
              type="text"
              className="form-control"
              id="landing"
              placeholder="Enter landing time"
              required="required"
              value={this.props.nFlight.landTime}
              onChange={this.props.onLandChange}
            />
          </div>
          <div className="form-group">
            <label for="price">Price(USD$)</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter price"
              required="required"
              value={this.props.nFlight.price}
              onChange={this.props.onPriceChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Flight
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddFlight;
