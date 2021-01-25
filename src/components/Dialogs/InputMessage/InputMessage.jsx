import React from 'react';
import styles from "./InputMessage.module.css"
import TextareaAutosize from 'react-textarea-autosize';

const InputMessage = () => {
  return (
    <div className={styles.input}>
      <TextareaAutosize className={styles.textarea} placeholder="Say something..." autoFocus maxRows={4}/>
      <button className={styles.send_button}>send</button>
    </div>
  );
};

export default InputMessage;