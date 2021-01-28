import React from 'react';
import styles from './Post.module.css';
import like from '../../../../images/like.svg';


const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.ava}>
        <img src={props.ava} alt=""/>
      </div>
      <div className={styles.name}>
        <a href="#">{props.name}</a>
      </div>
      <div className={styles.date}>
        {props.time}
      </div>
      <div className={styles.content}>
        {props.content}
      </div>
      <hr className={styles.hr} noshade size={1} width="99%"/>
      <div className={styles.likes}>
        <img className={styles.icon} src={like} alt=""/>
        <span className={styles.likes_text}>Likes:</span>
        <span className={styles.likes_count}>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;