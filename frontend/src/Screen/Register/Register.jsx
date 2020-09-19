import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CreateAccountForm from "../../Components/CreateAccountForm/CreateAccountForm";
import WelcomeToPPL from "../../Components/WelcomeToPPL";

export default class Register extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Create An Account</title>
        <Header />
        <div className="container">
          <div className="content">
            <CreateAccountForm />
            <WelcomeToPPL />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
