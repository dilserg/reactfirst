import React from 'react';
import styles from "./InputMessage.module.css"

const InputMessage = () => {
  return (
    <div className={styles.input}>
      <textarea autoFocus rows={10} placeholder="Say something..." className={styles.textarea}>
      
      </textarea>
    </div>
  );
};

export default InputMessage;