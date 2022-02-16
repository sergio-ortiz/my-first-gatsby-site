import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes.map((node) => (
    <article key={node.id}>
      <h2>{node.frontmatter.title}</h2>
      <p>Posted: {node.frontmatter.date}</p>
      <MDXRenderer>{node.body}</MDXRenderer>
    </article>
  ));

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {posts}
    </Layout>
  );
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
        body
      }
    }
  }
`;

export default BlogPage;
