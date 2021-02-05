import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = props => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {props.isAuthorized
            ? <NavLink exact onClick={props.loadProfile} activeClassName={styles.active} className={styles.item}
                       to="/profile">
              Profile</NavLink>
            : <NavLink to='/auth' className={styles.item}>Profile</NavLink>
          }
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.item} to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <a className={styles.item} href="#">Friends</a>
        </li>
        <li>
          <NavLink  onClick={props.toFirstPage} activeClassName={styles.active} className={styles.item}
                   to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;