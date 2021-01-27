import React from "react";
import Dialogs from "./Dialogs";
import SidebarMessageContainer from "./SidebarMessage/SidebarMessageContainer";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
  const sidebarMessages = state.dialogs.messages.map((message) => {
    return <SidebarMessageContainer name={message.name} content={message.content} id={message.id}/>
      });
  
  return{
    sidebarMessages: sidebarMessages,
    dialog: state.dialogs.dialog,
    inputMessage: state.dialogs.inputMessage
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    scrollDown: () => {
      const blockToScroll = document.querySelector(".scroll_down")
      setTimeout(() => {
        blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
      }, 1);
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;