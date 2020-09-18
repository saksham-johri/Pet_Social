import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import WelcomeToPPL from "../../Components/WelcomeToPPL";
import LoginForm from  '../../Components/LoginForm'

export default class Login extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Login Account</title>
        <Header />
        <div className="container">
          <div className="content">
            <LoginForm />
            <WelcomeToPPL />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}