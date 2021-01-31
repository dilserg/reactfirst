import React from 'react';
import styles from './EditPage.module.css';

const EditPage = () => {
  return (
    <>
      <div className={styles.head}>Change</div>
      <div className={styles.textContainer}>
        <div>
        <span className={styles.text}>
        name:
      </span>
          <input className={styles.input} type="text"/>
        </div>
        <div>
        <span className={styles.text}>
        surname:
      </span>
          <input className={styles.input} type="text"/>
        </div>
        <div>
        <span className={styles.text}>
        age:
      </span>
          <input className={styles.input} type="number"/>
        </div>
        <div>
        <span className={styles.text}>
        university:
      </span>
          <input className={styles.input} type="text"/>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Submit</button>
      </div>
    </>
  );
};

export default EditPage;