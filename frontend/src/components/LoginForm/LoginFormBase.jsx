import React, { Component } from "react";
import APICaller from "../../util/APICaller";

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

    APICaller("post", "/auth/sign_in", this.state)
      .then((res) => {

        console.log(res);

        if (res === "Username / Password Incorrect!") {
          this.setState({
            err: (
              <p style={{ color: "red" }}>* Username / Password Incorrect!</p>
            ),
          });
        } else {
          this.setState({
            err: "",
          });

          localStorage.setItem("userName", this.state.username);
          this.props.history.push("/");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
}
