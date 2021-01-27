import React from 'react';
import {updateInputMessageAction, sendMessageActionCreator} from "../../../state/actionCreator";
import InputMessage from "./InputMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    messageInputText: state.dialogs.inputMessage.messageInputText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateInputMessage: (messageText) => {
      let text = messageText.current.value;
      dispatch(updateInputMessageAction(text));
    }
  }
}

const InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage);


export default InputMessageContainer;