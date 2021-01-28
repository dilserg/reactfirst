import React from 'react';
import DialogMessage from './DialogMessage/DialogMessage';
import SelfDialogMessage from './DialogMessage/SelfDialogMessage';
import Dialog from './Dialog';


const DialogContainer = (props) => {
  let dialogMessages = props.dialog.dialogMessages.map((message) => {
    if (message.name === 'Self') {
      return <SelfDialogMessage photo={message.photo} message={message.content}/>;
    } else {
      return <DialogMessage photo={message.photo} name={message.name} message={message.content}/>;
    }
  });
  
  
  return <Dialog dialogMessages={dialogMessages}/>;
};

export default DialogContainer;