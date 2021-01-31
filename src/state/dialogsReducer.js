import MyPhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import FemalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png';

const initialState = {
  messages: [
    {id: 1, name: 'Nadezhda', content: 'Hello'},
    {id: 2, name: 'Ivan', content: 'Hello'},
    {id: 3, name: 'Alexey', content: 'Hello'},
    {id: 4, name: 'Ekaterina', content: 'Hello'},
  ],
  
  dialog: {
    dialogMessages: [
      {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
      {name: 'Self', content: 'Hello!', photo: MyPhoto},
      {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
      {name: 'Self', content: 'Hello!', photo: MyPhoto},
      {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
      {name: 'Self', content: 'Hello!', photo: MyPhoto},
      {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
      {name: 'Self', content: 'Hello!', photo: MyPhoto},
      {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
      {name: 'Self', content: 'Hello!', photo: MyPhoto},
    
    ],
  },
  
  inputMessage: {
    messageInputText: '',
  },
};


const dialogsReducer = (state = initialState, action) => {
  const blockToScroll = document.querySelector('.scroll_down');
  let stateCopy;
  switch (action.type) {
    
    case 'UPDATE-INPUT-MESSAGE' :
      stateCopy = {
        ...state,
        inputMessage: {messageInputText: action.newMessageText}
      };
      return stateCopy;
    
    
    case 'SEND-MESSAGE':
      stateCopy = {...state};
      stateCopy.dialog.dialogMessages = [...state.dialog.dialogMessages];
      
      let text = stateCopy.inputMessage.messageInputText.trim();
      if (text) {
        stateCopy.dialog.dialogMessages.push({
          name: 'Self',
          content: text,
          photo: MyPhoto
        });
        stateCopy.inputMessage.messageInputText = '';
      }
      
      setTimeout(() => {
        blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
      }, 1);
      return stateCopy;
    
    
    case 'SCROLL-DOWN':
      setTimeout(() => {
        blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
      }, 1);
      break;
    
    
    default:
      return state;
  }
};

export const updateInputMessageAC = newText => {
  return {
    type: 'UPDATE-INPUT-MESSAGE',
    newMessageText: newText
  };
};

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'});

export default dialogsReducer;