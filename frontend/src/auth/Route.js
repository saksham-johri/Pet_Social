import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../screen/Login/Login";
import MyUploads from "../screen/MyUploads/MyUploads";
import Register from "../screen/Register/Register";
import SinglePost from "../screen/SinglePost/SinglePost";
import { PublicRoute } from "./PublicRoute";

export function Router() {
  return (
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/signup" exact component={Register} />
      <Route path="/myuploads" exact component={MyUploads} />
      <Route path="/post/:id" component={SinglePost} />
    </Switch>
    // <SinglePost />
  );
}
