import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Style.module.css';
import navbarStyle from '../../styles/NavBarComponent.module.css';

interface NavBarComponentProps {}

export const NavBarComponent: React.FC<NavBarComponentProps> = ({}) => {
  return (
    <nav className={`navbar bg-ligth ${navbarStyle.myNavbar}`}>
      <div className="container-fluid">
        <Link to="/#" className="navbar-brand">
          <div className={navbarStyle.myFlex}>
            <div className={navbarStyle.logoHolder}>
              <div
                className={`${navbarStyle.circle} ${navbarStyle.cursorHover}`}
              >
                <div
                  className={`${navbarStyle.brandName} ${navbarStyle.cursorHover} ${styles.preventSelect}`}
                >
                  KE
                </div>
              </div>
            </div>
            <h1
              className={`${navbarStyle.neonText} ${navbarStyle.myNavBrand} ${navbarStyle.cursorHover} ${styles.preventSelect}`}
            >
              Our Song
            </h1>
          </div>
        </Link>
        <ul className="nav">
          <li key={'allsong'} className="nav-item">
            <Link
              className={`nav-link ${navbarStyle.linkColor}`}
              aria-current="page"
              to="/allsongs"
            >
              All Songs
            </Link>
          </li>
          <li key={'addsong'} className="nav-item">
            <Link className={`nav-link ${navbarStyle.linkColor}`} to="/addsongs">
              Add Song
            </Link>
          </li>
          <li key={'randomsong'} className="nav-item">
            <Link className={`nav-link ${navbarStyle.linkColor}`} to="/randomsong">
              Random Song
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
