import React from "react";
import style from "./Dialog.module.css"
import DialogMessage from "./DialogeMessage/DialogMessage";
import SelfDialogMessage from "./DialogeMessage/SelfDialogMessage";





const Dialog = (props) =>{
  let DialogMessages = props.DialogMessages.map((message)=>{
    if (message.name === "Self"){
      return <SelfDialogMessage photo={message.photo} message={message.content}/>
    }
    else {
      return <DialogMessage photo={message.photo} name={message.name} message={message.content}/>
    }
  })
  
  
  return(
    <div className={`${style.content} scroll_down`}>
      {DialogMessages}
    </div>
  )
}
export default Dialog;