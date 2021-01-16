import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>This is Apps Rules !</h1>
    <p>Log in to find out why.</p>
    <Link to="/dashboard">go to dashboard</Link>
  </Layout>
);
