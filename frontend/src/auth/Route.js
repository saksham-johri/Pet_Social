import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../screen/Login/Login";
import MyUploads from "../screen/MyUploads/MyUploads";
import Register from "../screen/Register/Register";
import Timeline from "../screen/Timeline/Timeline";
import { PublicRoute } from "./PublicRoute";

export function Router() {
  return (
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute
        path="/signup"
        exact
        component={Register}
      />
      <Route path='/myuploads' exact component={MyUploads} />
    </Switch>
  );
}
