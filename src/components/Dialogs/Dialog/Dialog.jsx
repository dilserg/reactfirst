import React from "react";
import style from "./Dialog.module.css"
import DialogMessage from "./DialogeMessage/DialogMessage";
import SelfDialogMessage from "./DialogeMessage/SelfDialogMessage";





const Dialog = (props) =>{
  let array = props.DialogMessages.map((message)=>{
    if (message.name === "Self"){
      return <SelfDialogMessage message={message.content}/>
    }
    else {
      return <DialogMessage name={message.name} message={message.content}/>
    }
  })
  
  
  return(
    <div className={style.content}>
      {array}
    </div>
  )
}
export default Dialog;