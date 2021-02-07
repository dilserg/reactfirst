import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import Preloader from '../common/Preloader/Preloader';
import MyPhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import {NavLink} from 'react-router-dom';
import InfoContainer from './Info/InfoContainer';


const Profile = (props) => {
  if (props.isFetching) {
    return <div className={styles.preloader}><Preloader/></div>;
  }
  
  const onPhotoUpload = (file) => {
    props.uploadPhoto(file.target.files[0]);
  };
  return (
    <div className={styles.content}>
      <div className={styles.avatar}>
        <div className={styles.relative}>
          <img className={styles.photo} src={props.photo || MyPhoto} alt=""/><br/>
          <label className={styles.label}>
            <input className={styles.uploader} onChange={onPhotoUpload} accept="image/x-png,image/jpeg" type='file'/>
            upload photo
          </label>
        </div>
        {(!!props.linkID && props.linkID != props.myID) || <NavLink to="/edit">
          <button className={styles.button}>Edit</button>
        </NavLink>}
      </div>
      
      <InfoContainer name={props.name} status={props.status} setNewStatus={props.setNewStatus} linkID={props.linkID}
                     myID={props.myID} getStatus={props.getStatus} aboutMe={props.aboutMe} contacts={props.contacts}
                     lookingForAJob={props.lookingForAJob} lookingForAJobDescription={props.lookingForAJobDescription}/>
      <Posts postsData={props.postsData} postInputText={props.postInputText} addPost={props.addPost}
             updateText={props.updateText} login={props.login}/>
    </div>
  );
};

export default Profile;