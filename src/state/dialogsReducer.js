import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"
import FemalePhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png"

const initialState ={
  messages: [
    {id: 1, name: "Nadezhda", content: "Hello"},
    {id: 2, name: "Ivan", content: "Hello"},
    {id: 3, name: "Alexey", content: "Hello"},
    {id: 4, name: "Ekaterina", content: "Hello"},
  ],
  
  dialog:{
    dialogMessages: [
      {name: "Nadezhda", content: "hello,friend!", photo: FemalePhoto},
      {name: "Self", content: "Hello!", photo: MyPhoto},
      {name: "Nadezhda", content: "hello,friend!", photo: FemalePhoto},
      {name: "Self", content: "Hello!", photo: MyPhoto},
      {name: "Nadezhda", content: "hello,friend!", photo: FemalePhoto},
      {name: "Self", content: "Hello!", photo: MyPhoto},
      {name: "Nadezhda", content: "hello,friend!", photo: FemalePhoto},
      {name: "Self", content: "Hello!", photo: MyPhoto},
      {name: "Nadezhda", content: "hello,friend!", photo: FemalePhoto},
      {name: "Self", content: "Hello!", photo: MyPhoto},
    
    ],
  },
  
  inputMessage:{
    messageInputText: "",
  },
}


const dialogsReducer = (state=initialState, action) => {
  const blockToScroll = document.querySelector(".scroll_down")
  
  switch (action.type) {
    case "UPDATE-INPUT-MESSAGE" :
      state.inputMessage.messageInputText = action.newMessageText;
      break;
      
    
    case "SEND-MESSAGE":
      let text = state.inputMessage.messageInputText.trim();
      
      if (text) {
        state.dialog.dialogMessages.push({
          name: "Self",
          content: text,
          photo: MyPhoto
        });
        
        state.inputMessage.messageInputText = "";
        
      }
      
      setTimeout(() => {
        blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
      }, 1);
      break;
    
    
    case "SCROLL-DOWN":
      setTimeout(() => {
        blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
      }, 1);
      break;
    
    
    default:
      break;
  }
  
  return state
  
}

export default dialogsReducer;