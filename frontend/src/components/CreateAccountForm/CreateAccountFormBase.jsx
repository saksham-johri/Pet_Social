import React, { Component } from "react";
import APICaller from "../../util/APICaller";

export default class CreateAccountFormBase extends Component {
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

    APICaller("post", "/auth/sign_up", this.state)
      .then((res) => {
        console.log("Responce from BackEnd", res);
        if (res === "Username Already Exist") {
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
}
