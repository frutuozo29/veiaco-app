import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/pages/Dashboard";
import Sobre from "../components/pages/Sobre";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/sobre" component={Sobre} />
    <Route exact path="*" component={Dashboard} />
  </Switch>
);
