import React, { Component } from "react";

class ValidateError extends Component {
  state = {};
  render() {
    return <div class="alert alert-danger">{this.props.children}</div>;
  }
}

export default ValidateError;
