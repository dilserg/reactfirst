import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"


const dialogsReducer = (state, action) => {
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