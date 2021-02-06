import React from 'react';
import styles from './Description.module.css';
import Contact from './Contact/Contact';

const FullInfo = (props) => {
  return (
    <div className={styles.info}>
      <Contact title='vk' link='#'/>
      <Contact title='GitHub' link='#'/>
      <Contact title='Facebook' link='#'/>
      <Contact title='Instagram' link='#'/>
      <Contact title='Twitter' link='#'/>
      <Contact title='Website' link='#'/>
      <Contact title='Youtube' link='#'/>
      <Contact title='Mainlink' link='#'/>
    </div>
  );
};

export default FullInfo;