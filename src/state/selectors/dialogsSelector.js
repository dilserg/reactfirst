import {createSelector} from 'reselect';
import SidebarMessageContainer from '../../components/Dialogs/SidebarMessage/SidebarMessageContainer';
import SelfDialogMessage from '../../components/Dialogs/Dialog/DialogMessage/SelfDialogMessage';
import DialogMessage from '../../components/Dialogs/Dialog/DialogMessage/DialogMessage';

export const getStateDialogMessages = state => state.dialogs.dialog.dialogMessages;

export const getInputMessage = state => state.dialogs.inputMessage;

const getMessages = state => state.dialogs.messages;

export const getSidebarMessages = createSelector(getMessages, (messages)=>{
  return messages.map((message) => {
    return <SidebarMessageContainer  name={message.name} content={message.content} id={message.id}/>;
  });
})


export const getDialogMessages = createSelector(getStateDialogMessages, (dialog)=>{
  return dialog.map((message) => {
    if (message.name === 'Self') {
      return <SelfDialogMessage photo={message.photo} message={message.content}/>;
    } else {
      return <DialogMessage photo={message.photo} name={message.name} message={message.content}/>;
    }
  });
})