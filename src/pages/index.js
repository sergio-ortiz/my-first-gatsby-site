import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage alt="Stack of JAM toast" src="../images/jamstack.jpeg" />
  </Layout>
);

export default IndexPage;
