import React from 'react';
import styles from "./InputMessage.module.css"
import TextareaAutosize from 'react-textarea-autosize';

const InputMessage = (props) => {
  let messageText = React.createRef();
  
  const updateMessage = () => {
    let text = messageText.current.value;
    props.updateInputMessage(text);
  }
  
  const sendMessage = () => {
    const text = messageText.current.value;
    props.sendMessage(text);
  }
  
  
  return (
    <div className={styles.input}>
      <TextareaAutosize ref={messageText} className={styles.textarea} placeholder="Say something..." autoFocus
                        maxRows={4} value={props.messageInputText} onChange={updateMessage}/>
      <button onClick={sendMessage} className={styles.send_button}>send</button>
    </div>
  );
};

export default InputMessage;