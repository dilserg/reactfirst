import React from 'react';
import styles from './DialogeMessage.module.css'
import {NavLink} from "react-router-dom";

const SelfDialogMessage = (props) => {
  return (
    <div className={`${styles.message} ${styles.self}`}>
      <div className={styles.name}>
        <NavLink activeClassName={styles.active} className={styles.name} to="/profile">
          You
        </NavLink>
      </div>
      <div className={styles.content}>
        {props.message}
      </div>
    </div>
  );
};

export default SelfDialogMessage;