import React from 'react';
import styles from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={styles.description}>
      <p className={styles.item}>
        <span className={styles.dim}>Age:</span>
        <span className={styles.info}>{props.info.age}</span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>City:</span>
        <span className={styles.info}>{props.info.city}</span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>University:</span>
        <span className={styles.info}>{props.info.university}</span>
      </p>
      <button className={styles.button}>Show full information</button>
    </div>
  );
};

export default Description;