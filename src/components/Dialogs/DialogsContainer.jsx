import React from 'react';
import Dialogs from './Dialogs';
import SidebarMessageContainer from './SidebarMessage/SidebarMessageContainer';
import {connect} from 'react-redux';
import WithAuthRedirect from '../HOC/WithAuthRedirect';


let mapStateToProps = (state) => {
  const sidebarMessages = state.dialogs.messages.map((message) => {
    return <SidebarMessageContainer name={message.name} content={message.content} id={message.id}/>;
  });
  
  return {
    sidebarMessages: sidebarMessages,
    dialog: state.dialogs.dialog,
    inputMessage: state.dialogs.inputMessage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    scrollDown() {
      const blockToScroll = document.querySelector('.scroll_down');
      blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
    }
  };
};

let WithRedirectDialogsContainer = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirectDialogsContainer);

export default DialogsContainer;