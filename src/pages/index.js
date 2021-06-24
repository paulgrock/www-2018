import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges: posts
    }
  }
}) => {
  return (
    <div>
      <Helmet>
        <meta name="theme-color" content="#00b0d8">
      </Helmet>
      {posts
        .filter(({node: post}) => post.frontmatter.title.length !== 0)
        .map(({node: post}) => {
          return (
            <article className="post" key={post.id}>
              <header className="post__header">
                <h2 className="post__title">
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <section className="post__meta">
                  <h4 className="post__author">{post.frontmatter.author}</h4>
                  <time className="post__date">{post.frontmatter.date}</time>
                </section>
              </header>
              <section className="post__excerpt">
                <p>
                  {post.excerpt}
                  <Link to={post.frontmatter.path} className="read-more">Read more »</Link>
                </p>
              </section>
            </article>
          )
        })
      }
    </div>
  );
};

export const PageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
          node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                  date
                  path
                  title
                  author
              }
          }
      }
    }
  }
`;

export default IndexPage
