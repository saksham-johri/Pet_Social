import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WelcomeToPPL from "../../components/WelcomeToPPL";
import LoginForm from "../../components/LoginForm/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Login Account</title>
        <Header value="" />
        <div className="container">
          <div className="content">
            <LoginForm />
            <WelcomeToPPL />
          </div>
        </div>
      </div>
    );
  }
}
