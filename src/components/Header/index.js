import React from 'react'
import Link from 'gatsby-link'
import ReactSVG from 'react-svg';

const Header = () => (
  <header className="site-header">
    <div className="site-header__inner">
      <Link to="/">
        <ReactSVG path="/images/logo.svg" className="logo--pg" />
      </Link>
      <h1 className="page__title">paulgrock.com</h1>
      <h3 className="page__description">Thoughts on building things on the web.</h3>
    </div>
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/about/" className="social-links">about</Link>
        </li>
        <li className="nav-list__item">
          <a href="//github.com/paulgrock" className="social-links">
            <ReactSVG
              path="/images/icons/github.svg" />
          </a>
        </li>
        <li className="nav-list__item">
          <a href="//twitter.com/paulgrock" className="social-links">
            <ReactSVG
              path="/images/icons/twitter.svg" />
          </a>
        </li>
        <li className="nav-list__item">
          <a href="//linkedin.com/in/paulgrock" className="social-links">
            <ReactSVG
              path="/images/icons/linkedin.svg" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
