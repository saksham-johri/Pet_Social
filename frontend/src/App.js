import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Post from "./Components/Post";
import Login from "./Screen/Login/Login";
import Register from "./Screen/Register/Register";
import SinglePost from "./Screen/SinglePost/SinglePost";
import Timeline from "./Screen/Timeline/Timeline";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/timeline" exact component={Timeline} />
          <Route path="/post" exact component={Post} />
        </Switch>
      </Router>
      {/* <SinglePost/> */}
      {/* <Post /> */}
    </>
  );
}

export default App;
