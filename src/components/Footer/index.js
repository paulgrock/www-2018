import React from 'react';
import Link from 'gatsby-link';
const Footer = () => (
    <footer className="footer--main clearfix">
      <section className="copyright">
      <Link to="/">paulgrock.com</Link> &copy; {new Date().getFullYear()}</section>
    </footer>
)

export default Footer;
