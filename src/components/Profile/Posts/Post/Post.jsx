import React, {useState} from 'react';
import styles from './Post.module.css';
import like from '../../../../images/like.svg';
import liked from '../../../../images/like_active.svg'


const Post = (props) => {
  
  let [likes,setLikes] = useState(props.likesCount)
  let [isLiked, setIsLiked] = useState(false)
  
  const addLike = () => {
    if(!isLiked)
      setLikes(prevState => prevState+1)
    else
      setLikes(prevState => prevState - 1)
    setIsLiked(prevState => !prevState)
  }
  
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
        {isLiked
        ? <img onClick={addLike} className={styles.icon} src={liked} alt=""/>
        : <img onClick={addLike} className={`${styles.icon} ${styles.colored}`} src={like} alt=""/>}
        <span className={styles.likes_count}>{likes}</span>
      </div>
    </div>
  );
};

export default Post;