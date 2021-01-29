import React from 'react';
import styles from './Description.module.css';

const Description = (props) => {
  let isFullInfo = false;
  let buttonText = "Show full information";
  const showFull = () =>{
    isFullInfo = !isFullInfo;
    buttonText = isFullInfo ? "Hide full information" : "Show full information";
  }
  
  return (
    <div className={styles.description}>
      <p className={styles.item}>
        <span className={styles.dim}>Age:</span>
        <span className={styles.info}>{props.age}</span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>City:</span>
        <span className={styles.info}>{props.city}</span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>University:</span>
        <span className={styles.info}>{props.university}</span>
      </p>
      <div>
        <button onClick={showFull} className={styles.button}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Description;