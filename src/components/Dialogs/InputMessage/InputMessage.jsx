import React from 'react';
import styles from "./InputMessage.module.css"
import TextareaAutosize from 'react-textarea-autosize';

const InputMessage = () => {
  return (
    <div className={styles.input}>
      <TextareaAutosize className={styles.textarea} placeholder="Say something..." autoFocus maxRows={4}/>
    </div>
  );
};

export default InputMessage;