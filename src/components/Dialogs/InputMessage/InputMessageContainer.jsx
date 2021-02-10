import React from 'react';
import {sendMessageAC} from '../../../state/dialogsReducer';
import InputMessage from './InputMessage';
import {connect} from 'react-redux';
import {getSelectedDialog} from '../../../state/selectors/dialogsSelector';


let mapStateToProps = (state) => {
  return {
    selectedId:getSelectedDialog(state)
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage(messageText,id) {
      dispatch(sendMessageAC(messageText,id));
    },
  };
};

const InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage);


export default InputMessageContainer;