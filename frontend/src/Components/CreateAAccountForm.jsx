import React, { Component } from 'react'
import axios from "axios";

export default class CreateAAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      fname: "",
      lname: "",
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
      .post("http://localhost:8081/sign_up", this.state)
      .then((res) => {
        console.log("Responce from BackEnd", res.data);
        if (res.data === "Username Already Exist") {
          this.setState({
            err: <p style={{ color: "red" }}>Username Already Exist</p>,
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
              <div className="register_sec">
                <h1>Create An Account</h1>
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
                      {this.state.err}
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
                      <span>Email</span>
                      <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handelChange}
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </li>
                    <li>
                      <span>First Name</span>
                      <input
                        name="fname"
                        value={this.state.fname}
                        onChange={this.handelChange}
                        type="text"
                        placeholder="Enter your first name"
                        required
                      />
                    </li>
                    <li>
                      <span>Last Name</span>
                      <input
                        name="lname"
                        value={this.state.lname}
                        onChange={this.handelChange}
                        type="text"
                        placeholder="Enter your last name"
                        required
                      />
                    </li>
                    {/* <li>
                      <input type="checkbox" />I agree to Term &amp; Conditions
                    </li> */}
                    <li>
                      <input type="submit" defaultValue="Register" />
                    </li>
                  </ul>
                </form>
                <div className="addtnal_acnt">
                  I already have an account.<a href="#">Login My Account !</a>
                </div>
              </div>
            </div>
    </>
    )
  }
}