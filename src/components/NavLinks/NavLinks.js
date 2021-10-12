import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLinks.module.css';

const NavLinks = () => {
  const [navbarIsShown, setNavbarIsShown] = useState(false);

  const toggleHandler = () => {
    setNavbarIsShown(!navbarIsShown);
  };

  return (
    <>
      <ul
        onClick={() => setNavbarIsShown(false)}
        className={
          navbarIsShown
            ? `${classes['nav-links']} ${classes['nav-links__show']}`
            : `${classes['nav-links']}`
        }
      >
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <a
            href="https://github.com/pooyadhgh/React-Redux-OMDB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
      <div className={classes['nav-links__toggle']} onClick={toggleHandler}>
        {navbarIsShown ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </div>
    </>
  );
};

export default NavLinks;