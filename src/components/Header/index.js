import React from 'react'
import Link from 'gatsby-link'
import Logo from "../../../static/images/logo.svg";
import Github from "../../../static/images/icons/github.svg";
import LinkedIn from "../../../static/images/icons/linkedin.svg";
import Twitter from "../../../static/images/icons/twitter.svg";

const Header = () => (
  <header className="site-header">
    <div className="site-header__inner">
      <Link to="/">
        <Logo />
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
            <Github style={{width: '32px', height: '32px'}} />
          </a>
        </li>
        <li className="nav-list__item">
          <a href="//twitter.com/paulgrock" className="social-links">
            <Twitter style={{width: '32px', height: '32px'}} />
          </a>
        </li>
        <li className="nav-list__item">
          <a href="//linkedin.com/in/paulgrock" className="social-links">
            <LinkedIn style={{width: '32px', height: '32px'}} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
