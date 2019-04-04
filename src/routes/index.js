import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Sobre from "../pages/Sobre";

export default props => (
  <Router>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/sobre" component={Sobre} />
  </Router>
);
