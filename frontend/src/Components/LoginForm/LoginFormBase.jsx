import React, { Component } from "react";
import axios from "axios";
import url from "../../config";

export default class LoginFormBase extends Component {
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
      .post(`${url}/sign_in`, this.state)
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
}