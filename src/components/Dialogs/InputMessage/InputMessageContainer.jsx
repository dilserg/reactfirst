import React from 'react';
import {sendMessageAC} from '../../../state/dialogsReducer';
import InputMessage from './InputMessage';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {

};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage(messageText) {
      dispatch(sendMessageAC(messageText));
    },
  };
};

const InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage);


export default InputMessageContainer;