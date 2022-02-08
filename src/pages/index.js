import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
      alt="A picture of me looking photogenic"
      src="../images/IMG_1275.JPG"
    />
  </Layout>
);

export default IndexPage;
