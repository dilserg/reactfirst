import MyPhoto from '../images/Male.png'
import FemalePhoto from '../images/Female.png';

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
};


const dialogsReducer = (state = initialState, action) => {
  const blockToScroll = document.querySelector('.scroll_down');
  let stateCopy;
  switch (action.type) {
    
    case 'SEND-MESSAGE':
      stateCopy = {...state};
      stateCopy.dialog.dialogMessages = [...state.dialog.dialogMessages];
      
      let text = action.messageText.trim();
      if (text) {
        stateCopy.dialog.dialogMessages.push({
          name: 'Self',
          content: text,
          photo: MyPhoto
        });
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


export const sendMessageAC = (messageText) => ({type: 'SEND-MESSAGE', messageText});

export default dialogsReducer;