import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CreateAAccountForm from "../../Components/CreateAAccountForm";
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
            <CreateAAccountForm />
            <WelcomeToPPL />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}