import React, { ReactElement } from "react";
import Layout from "@components/Layout/Layout";

export default function NotFound(): ReactElement {
  return (
    <Layout>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}
