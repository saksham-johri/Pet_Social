import React, { Component } from 'react'
import axios from "axios";
import url from "../../config";

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

    axios
      .post(`${url}/sign_up`, this.state)
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
}
