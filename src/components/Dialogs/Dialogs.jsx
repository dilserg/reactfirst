import React from "react";
import styles from "./Dialogs.module.css";
import DialogContainer from "./Dialog/DialogContainer";
import InputMessageContainer from "./InputMessage/InputMessageContainer";


const Dialogs = (props) => {
  
  return (
    <div className={styles.dialogs}>
      <div className={styles.sidebar}>
        {props.sidebarMessages}
      </div>
      <div className={styles.wrapper}>
        <DialogContainer dialog={props.dialog}/>
        <InputMessageContainer store={props.store} inputMessage={props.inputMessage} />
      </div>
    </div>
  );
};

export default Dialogs;