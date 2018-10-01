import React, { Component } from "react";
import "../assets/css/login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePassChange = e => {
    this.setState({ password: e.target.value });
  };
  submitLogin = e => {
    e.preventDefault();
    if (this.state.password === "password" && this.state.email === "user") {
      this.props.history.push("/results");
    } else {
      alert("Wrong email or password");
    }
  };

  render() {
    return (
      <div>
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">
            Username
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Username"
            required=""
            autofocus=""
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.submitLogin}
          >
            Sign in
          </button>

          <p className="mt-5 mb-3 text-muted text-center">
            © {new Date().getFullYear()}
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
