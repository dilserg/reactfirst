import React from 'react';
import styles from '../Info.module.css';

const FullInfo = (props) => {
  return (
    <div className={`${styles.info} ${styles.full}`}>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default FullInfo;