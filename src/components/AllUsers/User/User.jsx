import React from 'react';
import styles from './User.module.css';

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
        <img src={props.photo} alt=""/>
      </div>
      <div className={styles.info}>
        {props.name} {props.surname}
      </div>
      <div className={styles.status}>
        <span className={styles.dim}>status: </span>{props.status}
      </div>
      <div className={styles.button}>
        {props.isFollowed ? <button onClick={unfollow}>Follow</button> : <button onClick={follow}>Unfollow</button>}
      </div>
    
    </div>
  );
};

export default User;