import React from 'react';
import styles from './InputMessage.module.css';
import {Form, Field} from 'react-final-form';


const InputMessageForm = props => {
  
  const onSubmit = data => {
    debugger
    props.sendMessage(data.messageText,props.selectedId);
    data.messageText = '';
  };
  
  return <Form onSubmit={onSubmit} render={({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
      <Field component='textarea' name='messageText' className={styles.textarea} placeholder="Say something..."
             autoFocus/>
      <button className={styles.send_button}>send</button>
    </form>
  )}/>;
};


const InputMessage = (props) => {
  return (
    <div className={styles.input}>
      <InputMessageForm selectedId={props.selectedId} sendMessage={props.sendMessage}/>
    </div>
  );
};


export default InputMessage;