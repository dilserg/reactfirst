import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import userAPI from '../../../api/api';
import Preloader from '../../common/Preloader/Preloader';

const User = (props) => {
  
  
  const unfollow = () => {
    props.toggleFollowingProgress(true, props.id);
    userAPI.unfollow(props.id)
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.unfollow(props.id);
        }
        props.toggleFollowingProgress(false,props.id);
      });
  };
  
  const follow = () => {
    props.toggleFollowingProgress(true,props.id);
    userAPI.follow(props.id)
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.follow(props.id);
        }
        props.toggleFollowingProgress(false,props.id);
      });
  };
  
  const button = () => {
    if (props.usersInFollowingProgress.includes(props.id)) {
      return <Preloader/>;
    } else {
      if (props.isFollowed) {
        return <button onClick={unfollow}>Unfollow</button>;
      } else {
        return <button onClick={follow}>Follow</button>;
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