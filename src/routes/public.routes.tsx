import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "../Layout";
import { Landing } from "../Pages/Landing";
import { SignIn } from "../Pages/Sign/SignIn";

export const PublicRoutes: React.FC = () => {
  return (
    <Layout>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Layout>
  );
};
