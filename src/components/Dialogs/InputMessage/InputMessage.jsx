import React from 'react';
import styles from "./InputMessage.module.css"
import TextareaAutosize from 'react-textarea-autosize';

const InputMessage = () => {
  let messageText= React.createRef();
  const sendMessage = () =>{
    const text = messageText.current.value;
    alert(text)
  }
  
  
  return (
    <div className={styles.input}>
      <TextareaAutosize ref={messageText} className={styles.textarea} placeholder="Say something..." autoFocus maxRows={4}/>
      <button onClick={sendMessage} className={styles.send_button}>send</button>
    </div>
  );
};

export default InputMessage;