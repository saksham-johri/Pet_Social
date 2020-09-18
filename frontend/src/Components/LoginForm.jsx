import React, { Component } from 'react'
import axios from "axios";

export default class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      err: "",
    };
  }

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitData = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/sign_in", this.state)
      .then((res) => {
        console.log("Responce from BackEnd", res.data);

        if (res.data === "Username / Password Incorrect!") {
          this.setState({
            err: (
              <p style={{ color: "red" }}>* Username / Password Incorrect!</p>
            ),
          });
        } else {
          this.setState({
            err: "",
          });
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  render() {
    return (
      <>
        <div className="content_rgt">
              <div className="login_sec">
                <h1>Log In</h1>
                <form onSubmit={this.submitData}>
                  <ul>
                    <li>
                      <span>Username</span>
                      <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handelChange}
                        type="text"
                        placeholder="Enter your username"
                        required
                      />
                    </li>
                    <li>
                      <span>Password</span>
                      <input
                        name="password"
                        value={this.state.password}
                        onChange={this.handelChange}
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </li>
                    <li>
                      <input type="checkbox" />
                      Remember Me
                      {this.state.err}
                    </li>
                    <li>
                      <input type="submit" value="Log In" />
                      <a>Forgot Password</a>
                    </li>
                  </ul>
                </form>
                <div className="addtnal_acnt">
                  I do not have any account yet.
                  <a>Create My Account Now !</a>
                </div>
              </div>
            </div>
      </>
    )
  }
}
