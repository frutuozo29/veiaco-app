import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/pages/Dashboard";
import Sobre from "../components/pages/Sobre";
import Users from "./../components/pages/users/users";

export default class Routes extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/users" component={Users} />
        <Route exact path="*" component={Dashboard} />
      </Switch>
    );
  }
}
