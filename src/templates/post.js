import React, {Component} from 'react';
import Helmet from 'react-helmet';

const Template = ({
  data: {
    markdownRemark: post,
  },
  siteMetadata: {
    title: siteTitle
  }
}) => {
    return (
      <article className="post">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <header className="post__header">
          <h1 className="post__title">{post.frontmatter.title}</h1>
          <section className="post__meta">
            <h4 className="post__author">{post.frontmatter.author}</h4>
            on
            <time className="post__date">{post.frontmatter.date}</time>
          </section>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    )
}

export const postQuery = graphql`
    query PostsByPath($path: String) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
          html
          frontmatter {
            date
            path
            title
            author
          }
        }
    }
`;

export default Template;