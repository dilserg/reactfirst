import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';

const User = (props) => {
  
  
  const unfollow = () => {
    props.unfollow(props.id);
  };
  
  const follow = () => {
    props.follow(props.id);
  };
  
  return (
    <div className={styles.user}>
      <div className={styles.photo}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.photo} alt=""/>
        </NavLink>
      </div>
      <div className={styles.info}>
        <NavLink className={styles.info} to={`/profile/${props.id}`}>
          {props.name} {props.surname}
        </NavLink>
      </div>
      <div className={styles.status}>
        <span className={styles.dim}>status: </span>{props.status}
      </div>
      <div className={styles.button}>
        {props.isFollowed ? <button onClick={unfollow}>Unfollow</button> : <button onClick={follow}>Follow</button>}
      </div>
    
    </div>
  );
};

export default User;