import React from 'react';
import styles from "./Description.module.css";

const Description = (props) => {
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
        <button onClick={() => console.log(1)} className={styles.button}>Show full information</button>
      </div>
    </div>
  );
};

export default Description;