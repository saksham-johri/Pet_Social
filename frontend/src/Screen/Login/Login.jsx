import React, { Component } from "react";
import axios from "axios";
import Header from "../../Components/Header";

export default class Login extends Component {
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
      <div>
        <meta charSet="utf-8" />
        <title>Login Account</title>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link
          href="css/bootstrap-responsive.css"
          rel="stylesheet"
          type="text/css"
        />
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <button
                type="button"
                className="btn btn-navbar"
                data-toggle="collapse"
                data-target=".nav-collapse"
              >
                {" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
              </button>
              <a className="brand">PPL</a>
              <div className="pro_info pull-right">
                <div className="pro_icn">
                  <img src="images/pic_small.png" />
                </div>
                <div className="pro_txt">
                  Me
                  <b className="caret" />
                </div>
                <ul
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="dLabel"
                >
                  <li>
                    <a tabIndex={-1} href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a tabIndex={-1} href="#">
                      Message Box
                    </a>
                  </li>
                  <li>
                    <a tabIndex={-1} href="#">
                      Change Language
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a tabIndex={-1} href="#">
                      <input type="text" placeholder="search" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-collapse collapse">
                <ul className="nav">
                  <li className="active">
                    {" "}
                    <a>Home</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>E-Coupons</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>E-Brands</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>Resuse Market</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a>Lost and Found</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <div className="container">
          <div className="content">
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
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
              <img src="images/img_9.png" alt="" />
            </div>
          </div>
        </div>
        <div className="clear" />
        <div className="footr">
          <div className="footr_lft">
            <div className="footer_div1">
              Copyright © Pet-Socail 2014 All Rights Reserved
            </div>
            <div className="footer_div2">
              <a href="#">Privacy Policy </a>|{" "}
              <a href="#"> Terms &amp; Conditions</a>
            </div>
          </div>
          <div className="footr_rgt">
            <ul>
              <li>
                <a href="#">
                  <img src="images/social_1.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social_2.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social_3.png" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/social_4.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
