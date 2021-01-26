import React from 'react';
import styles from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={styles.description}>
      <p className={styles.item}>
        <span className={styles.dim}>Age:</span>
        <span className={styles.info}>{props.personInfo.age}</span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>City:</span>
        <span className={styles.info}>{props.personInfo.city}</span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>University:</span>
        <span className={styles.info}>{props.personInfo.university}</span>
      </p>
      <button onClick={()=>props.showFull()} className={styles.button}>Show full information</button>
    </div>
  );
};

export default Description;