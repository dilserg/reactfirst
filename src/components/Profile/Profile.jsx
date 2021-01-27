import React from "react";
import styles from "./Profile.module.css"
import ava from "../../images/Male.png"
import PostsContainer from "./Posts/PostsContainer";
import InfoContainer from "./Info/InfoContainer";



const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.avatar}>
        <img src={ava} alt=""/><br/>
        <button className={styles.button}>Edit</button>
      </div>
      <InfoContainer store={props.store}/>
      <PostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;