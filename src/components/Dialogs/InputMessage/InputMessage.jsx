import React from 'react';
import styles from './InputMessage.module.css';
import TextareaAutosize from 'react-textarea-autosize';

const InputMessage = (props) => {
  
  let messageText = React.createRef();
  
  const updateMessage = () => {
    props.updateInputMessage(messageText);
  };
  
  return (
    <div className={styles.input}>
      <TextareaAutosize ref={messageText} className={styles.textarea} placeholder="Say something..." autoFocus
                        maxRows={4} value={props.messageInputText} onChange={updateMessage}/>
      <button onClick={props.sendMessage} className={styles.send_button}>send</button>
    </div>
  );
};

export default InputMessage;