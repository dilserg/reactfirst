import React from "react";
import styles from "./Profile.module.css"
import ava from "../../images/Male.png"
import Info from "./Info/info";
import Posts from "./Posts/Posts";
import FullInfo from "./Info/FullInfo";



const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.avatar}>
        <img src={ava} alt=""/><br/>
        <button className={styles.button}>Edit</button>
      </div>
      <Info personInfo={props.state.personInfo}/>
      <FullInfo/>
      <Posts postsData={props.state.postsData}/>
    </div>
  )
}

export default Profile;