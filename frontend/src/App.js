import React from "react";
import "./App.css";
import { Router } from "./auth/Route";
import Footer from "./components/Footer";
import MyUploads from "./screen/MyUploads/MyUploads";

function App() {
  return (
    <>
      <Router />
      <Footer />
    </>
  );
}

export default App;
