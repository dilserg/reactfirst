import React from 'react';
import styles from './Description.module.css';
import Contact from './Contact/Contact';

const FullInfo = (props) => {
  debugger
  return (
    <div className={styles.info}>
      <Contact title='vk' link={props.contacts.vk}/>
      <Contact title='GitHub' link={props.contacts.github}/>
      <Contact title='Facebook' link={props.contacts.facebook}/>
      <Contact title='Instagram' link={props.contacts.instagram}/>
      <Contact title='Twitter' link={props.contacts.twitter}/>
      <Contact title='Youtube' link={props.contacts.youtube}/>
      <Contact title='Main link' link={props.contacts.mainLink}/>
    </div>
  );
};

export default FullInfo;