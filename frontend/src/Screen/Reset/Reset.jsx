import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Reserform from "../../Components/ResetForm/Reserform";
import WelcomeToPPL from "../../Components/WelcomeToPPL";

export default function Reset() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Reset Password</title>
      <Header />
      <div className="container">
        <div className="content">
          <Reserform />
          <WelcomeToPPL />
        </div>
      </div>
      <Footer />
    </>
  );
}
