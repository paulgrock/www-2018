import React from "react";
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const AboutPage = ({
  siteMetadata: {
    title,
    description
  }
}) => (
  <div>
    <Helmet title={`About Me | ${title}`} />
    <h1>About Me</h1>
    <p>{description}</p>
    <img src="/images/pg.jpg" />
  </div>
)

export default AboutPage