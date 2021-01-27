import React from "react";
import Dialogs from "./Dialogs";
import SidebarMessageContainer from "./SidebarMessage/SidebarMessageContainer";


const DialogsContainer = (props) => {
  const sidebarMessages = props.store.getState().dialogs.messages.map((message) => {
    return <SidebarMessageContainer store={props.store} name={message.name} content={message.content} id={message.id}/>
  });
  
  const dialog = props.store.getState().dialogs.dialog;
  const inputMessage = props.store.getState().dialogs.inputMessage;
  return <Dialogs store={props.store} sidebarMessages={sidebarMessages} dialog={dialog} inputMessage={inputMessage}/>
};

export default DialogsContainer;