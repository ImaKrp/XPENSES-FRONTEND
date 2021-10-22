import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../Layout";
import { Landing } from "../Pages/Landing";
import { Dashboard } from "../Pages/Dashboard";

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Redirect from="*" to="/dashboard" />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Layout>
  );
};
