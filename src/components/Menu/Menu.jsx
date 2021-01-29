import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} className={styles.item} to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.item} to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <a className={styles.item} href="#">Friends</a>
        </li>
        <li>
          <a className={styles.item} href="#">Photos</a>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.item} to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;