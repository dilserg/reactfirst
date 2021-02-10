import MyPhoto from '../images/Male.png';
import FemalePhoto from '../images/Female.png';

const initialState = {
  messages: [
    {id: 1, name: 'Nadezhda', content: 'Hello'},
    {id: 2, name: 'Ivan', content: 'Hello'},
    {id: 3, name: 'Alexey', content: 'Hello'},
    {id: 4, name: 'Ekaterina', content: 'Hello'},
  ],
  selected: null,
  dialog: {
    dialogMessages: {
        id1: [
          {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Nadezhda', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},],
        id2:[{name: 'Ivan', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ivan', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ivan', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ivan', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ivan', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},],
        id3:[{name: 'Alexey', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Alexey', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Alexey', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Alexey', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Alexey', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},],
        id4:[{name: 'Ekaterina', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ekaterina', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ekaterina', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ekaterina', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},
          {name: 'Ekaterina', content: 'hello,friend!', photo: FemalePhoto},
          {name: 'Self', content: 'Hello!', photo: MyPhoto},]
      }
  },
};


const dialogsReducer = (state = initialState, action) => {
  const blockToScroll = document.querySelector('.scroll_down');
  let stateCopy;
  switch (action.type) {
    
    case 'SELECT_DIALOG':
      return {
        ...state,
        selected: action.id
      };
    
    case 'SEND-MESSAGE':
      stateCopy = {...state};
      debugger
      stateCopy.dialog.dialogMessages = {...state.dialog.dialogMessages};
      let text = action.messageText.trim();
      if (text) {
        stateCopy.dialog.dialogMessages['id' + action.id].push({
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


export const sendMessageAC = (messageText, id) => ({type: 'SEND-MESSAGE', messageText, id});

export const selectDialog = id => ({type: 'SELECT_DIALOG', id});

export default dialogsReducer;