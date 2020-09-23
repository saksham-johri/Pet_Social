import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateAccountForm from "../../components/CreateAccountForm/CreateAccountForm";
import WelcomeToPPL from "../../components/WelcomeToPPL";

export default class Register extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Create An Account</title>
        <Header value="" />
        <div className="container">
          <div className="content">
            <CreateAccountForm />
            <WelcomeToPPL />
          </div>
        </div>
      </div>
    );
  }
}
