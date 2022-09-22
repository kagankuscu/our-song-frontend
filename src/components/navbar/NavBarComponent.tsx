import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import styles from '../../styles/Style.module.css';
interface NavBarComponentProps {}

export const NavBarComponent: React.FC<NavBarComponentProps> = ({}) => {
  return (
    <nav className='navbar bg-ligth myNavbar'>
      <div className='container-fluid'>
        <Link to="/#" className='navbar-brand'>
          <div className="myFlex">
            <div className="logoHolder">
              <div className="circle cursorHover">
                <div className={"brandName cursorHover " + styles.preventSelect}>KE</div>
              </div>
            </div>
            <h1 className={"neonText myNavBrand cursorHover " + styles.preventSelect}>
              Our Song
            </h1>
          </div>
        </Link>
        <ul className="nav">
          <li key={'allsong'} className="nav-item">
            <Link
              className='nav-link myColor'
              aria-current="page"
              to="/allsongs"
            >
              All Songs
            </Link>
          </li>
          <li key={'addsong'} className="nav-item">
            <Link className='nav-link myColor' to="/addsongs">
              Add Song
            </Link>
          </li>
          <li key={'randomsong'} className="nav-item">
            <Link className={'nav-link myColor'} to="/randomsong">
              Random Song
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
