import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes.map((node) => (
    <div key={node.id}>
      <h2>
        <Link to={"./" + node.slug}>{node.frontmatter.title}</Link>
      </h2>
      <p>Posted: {node.frontmatter.date}</p>
    </div>
  ));

  return <Layout pageTitle="My Blog Posts">{posts}</Layout>;
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
