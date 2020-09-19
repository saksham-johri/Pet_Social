import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import Timeline from "./Screen/Timeline/Timeline";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/timeline" exact component={Timeline} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
