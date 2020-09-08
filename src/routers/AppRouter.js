import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { LoginScreen } from "../components/login/LoginScreen";
import { Marvel } from "../components/marvel/Marvel";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={Marvel} />
        </Switch>
      </div>
    </Router>
  );
};
