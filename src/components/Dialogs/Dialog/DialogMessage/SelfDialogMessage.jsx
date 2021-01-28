import React from 'react';
import styles from './DialogMessage.module.css';
import {NavLink} from 'react-router-dom';
import style from './DialogMessage.module.css';

const SelfDialogMessage = (props) => {
  return (
    <div className={`${styles.message} ${styles.self}`}>
      <div className={style.photo}>
        <img src={props.photo} alt=""/>
      </div>
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