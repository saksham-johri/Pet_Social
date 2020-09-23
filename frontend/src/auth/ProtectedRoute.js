import React, {useState} from "react";
import { Route } from "react-router-dom";
import Timeline from "../screen/Timeline/Timeline";

export const ProtectedRoute = ({ component: Component, setTemp: setTemp ,...rest }) => {

  return (
    <>
      <Route
        {...rest}
        component={(props) => {
          if (localStorage.userName) {
            return <Timeline {...props}/>;
          } else {
            return <Component />;
          }
        }}
      />
    </>
  );
};