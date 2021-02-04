import React from 'react';
import styles from './Header.module.css';
import twitter from '../../images/twitter.svg';
import {NavLink} from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

const Header = (props) => {
  
  
  const block = () => {
    if (props.login) {
      if (props.isFetching)
        return <Preloader/>
      return <NavLink onClick={props.logOut} to='/auth'>Log out</NavLink>;
    }
    return <NavLink to='/auth'>Login</NavLink>;
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href='#'>
          <img src={twitter} alt=''/>
        </a>
        <div className={styles.login}>
          {props.path === '/auth' || block()}
        </div>
      </div>
    </header>)
    ;
};

export default Header;



