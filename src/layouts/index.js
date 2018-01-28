import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const TemplateWrapper = (props) => {
  const {
    children,
    data: {
      site: {
        siteMetadata
      }
    }
  } = props;
  return (
    <div>
      <Helmet
        title={siteMetadata.title}
        meta={[
          { name: 'description', content: siteMetadata.description },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div className="content-container">
        {children({...props, siteMetadata})}
      </div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const SiteQuery = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        siteUrl
        title
        author
        description
      }
    }
  }
`;

export default TemplateWrapper
