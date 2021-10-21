import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../Layout";
import { Landing } from "../Pages/Landing";

export const PublicRoutes: React.FC = () => {
  return (
    <Layout>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Layout>
  );
};
