import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Routes } from "./routes";
import { NotFound, SignIn, Register } from "./../screens";
const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* SignIn Route */}
        <Route exact path={Routes.home} element={<SignIn />} />

        {/* Register Route */}
        <Route exact path={Routes.verify} element={<Register />} />

        {/* For unknow/non-defined path */}
        <Route exact path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
