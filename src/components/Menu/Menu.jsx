import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = (props) => {
  
  const toFirstPage = () => {
    props.toFirstPage();
    props.getUsers(1, props.usersOnOnePage);
  };
  
  const loadProfile = () =>{
    props.getProfile(props.id)
  }
  
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink onClick={loadProfile} activeClassName={styles.active} className={styles.item} to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} className={styles.item} to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <a className={styles.item} href="#">Friends</a>
        </li>
        <li>
          <NavLink onClick={toFirstPage} activeClassName={styles.active} className={styles.item}
                   to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;