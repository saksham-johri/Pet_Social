import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../screen/Login/Login";
import Register from "../screen/Register/Register";
import Timeline from "../screen/Timeline/Timeline";
import { ProtectedRoute } from "./ProtectedRoute";

export function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Login} />
      <ProtectedRoute
        path="/signup"
        exact
        component={Register}
      />
    </Switch>
  );
}
