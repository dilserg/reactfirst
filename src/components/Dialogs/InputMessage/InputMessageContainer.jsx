import React from 'react';
import {updateInputMessageAction, sendMessageActionCreator} from "../../../state/actionCreator";
import InputMessage from "./InputMessage";

const InputMessageContainer = (props) => {
  
  const updateInputMessage = (messageText) => {
    let text = messageText.current.value;
    props.store.dispatch(updateInputMessageAction(text));
  }
  
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }
  
  
  
  return <InputMessage sendMessage={sendMessage} updateInputMessage={updateInputMessage}
                       messageInputText={props.inputMessage.messageInputText} />
};

export default InputMessageContainer;