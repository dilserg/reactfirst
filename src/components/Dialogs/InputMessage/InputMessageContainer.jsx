import React from 'react';
import {updateInputMessageAC, sendMessageAC} from '../../../state/actionCreator';
import InputMessage from './InputMessage';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    messageInputText: state.dialogs.inputMessage.messageInputText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage() {
      dispatch(sendMessageAC());
    },
    updateInputMessage(messageText){
      let text = messageText.current.value;
      dispatch(updateInputMessageAC(text));
    }
  };
};

const InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage);


export default InputMessageContainer;