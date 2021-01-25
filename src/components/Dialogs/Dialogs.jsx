import React from "react";
import styles from "./Dialogs.module.css";
import SidebarMessage from "./SidebarMessage/SidebarMessage";
import Dialog from "./Dialog/Dialog";
import InputMessage from "./InputMessage/InputMessage";





const Dialogs = (props) => {
  let messages = props.messages.map((message)=>{
    return <SidebarMessage name={message.name} content={message.content} id={message.id}/>
  })
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.sidebar}>
        {messages}
      </div>
      <Dialog DialogMessages={props.DialogMessages}/>
      <InputMessage/>
    </div>
  );
};

export default Dialogs;