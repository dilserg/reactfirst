import React from "react";
import styles from "./Dialogs.module.css";
import SidebarMessage from "./SidebarMessage/SidebarMessage";
import Dialog from "./Dialog/Dialog";
import InputMessage from "./InputMessage/InputMessage";


const Dialogs = (props) => {
  let messages = props.dialogs.messages.map((message) => {
    return <SidebarMessage dispatch={props.dispatch} name={message.name} content={message.content} id={message.id}/>
  })
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.sidebar}>
        {messages}
      </div>
      <div className={styles.wrapper}>
        <Dialog dialog={props.dialogs.dialog}/>
        <InputMessage dispatch={props.dispatch} inputMessage={props.dialogs.inputMessage}/>
      </div>
    
    </div>
  );
};

export default Dialogs;