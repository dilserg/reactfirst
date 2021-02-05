import React from 'react';
import styles from './Header.module.css';
import twitter from '../../images/twitter.svg';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  
  const block = () => {
    if (props.login) {
      if (props.isFetching)
        return undefined
      return <NavLink onClick={props.logOut} to='/auth'>Log out</NavLink>;
    }
    return <NavLink to='/auth'>Login</NavLink>;
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <NavLink to='/'>
          <img src={twitter} alt=''/>
        </NavLink>
        <div className={styles.login}>
          {props.path === '/auth' || block()}
        </div>
      </div>
    </header>)
    ;
};

export default Header;



