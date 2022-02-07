import React from "react";
import { Link } from "gatsby";

const IndexPage = () => (
  <main>
    <title>Home Page</title>
    <h1>Welcome to my Gatsby site!</h1>
    <Link to="/about">About</Link>
    <p>I'm this by following the Gatsby Tutorial.</p>
  </main>
);

export default IndexPage;
