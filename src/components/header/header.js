import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss';
import GetSiteMetadata from '../../hooks/GetSiteMetadata';

const Header = () => {

  const siteMetadata = GetSiteMetadata();

  return (
    <header className={headerStyles.header}>
      <h3>
        <Link className={headerStyles.title} to='/'>{siteMetadata.title}</Link></h3>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/'>Home</Link>
          </li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to='/blog'>Blog</Link>
          </li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}
                    to='/about'>About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive}
                    to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
