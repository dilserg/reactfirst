import React from 'react';
import styles from './Header.module.css';
import twitter from '../../images/twitter.svg';

const Header = () => {
  return (<header className={styles.header}>
    <a href="#">
      <img src={twitter} alt="logo"/>
    </a>
  </header>);
};

export default Header;