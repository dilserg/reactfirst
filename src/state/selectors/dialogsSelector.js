import {createSelector} from 'reselect';
import SelfDialogMessage from '../../components/Dialogs/Dialog/DialogMessage/SelfDialogMessage';
import DialogMessage from '../../components/Dialogs/Dialog/DialogMessage/DialogMessage';
import SidebarMessageContainer from '../../components/Dialogs/SidebarMessage/SidebarMessageContainer';
import {Redirect} from 'react-router-dom';

export const getStateDialogMessages = state => state.dialogs.dialog.dialogMessages;

export const getInputMessage = state => state.dialogs.inputMessage;

const getMessages = state => state.dialogs.messages;

export const getSelectedDialog = state => state.dialogs.selected;

export const getSidebarMessages = createSelector(getMessages, (messages)=>{
  return messages.map((message,index) => {
    return <SidebarMessageContainer key={index} name={message.name} content={message.content} id={message.id}/>;
  });
})


export const getDialogMessages = createSelector(getStateDialogMessages,getSelectedDialog,
  (dialog,selectedID)=>{
  if (!selectedID)
    return <Redirect to='/dialogs'/>
  return dialog['id'+selectedID].map((message,index) => {
    if (message.name === 'Self') {
      return <SelfDialogMessage key={index} photo={message.photo} message={message.content}/>;
    } else {
      return <DialogMessage key={index} photo={message.photo} name={message.name} message={message.content}/>;
    }
  });
})