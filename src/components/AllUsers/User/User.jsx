import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';

const User = (props) => {
  
  
  const button = () => {
    if (props.usersInFollowingProgress.includes(props.id)) {
      return <Preloader/>;
    } else {
      if (props.isFollowed) {
        return <button onClick={()=>props.unfollow(props.id)}>Unfollow</button>;
      } else {
        return <button onClick={()=>props.follow(props.id)}>Follow</button>;
      }
    }
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
        {button()}
      </div>
    </div>
  );
};

export default User;