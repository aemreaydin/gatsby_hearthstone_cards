import React, { ReactElement } from "react";
import { Router } from "@reach/router";
import Layout from "@components/Layout/Layout";
import Profile from "@components/Profile/Profile";
import Login from "@components/Login/Login";
import PrivateRoute from "@components/PrivateRoute";

export default function App(): ReactElement {
  return (
    <Layout>
      <Router style={{ height: "100%" }}>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  );
}
