export const addPostActionCreator = () => ({type:"ADD-POST"})

export const updatePostTextActionCreator = newText =>{
  return {
    type:"UPDATE-POST-TEXT",
    newPostText:newText
  };
}

export const updateInputMessageAction = newText => {
  return{
    type:"UPDATE-INPUT-MESSAGE",
    newMessageText:newText
  }
}

export const sendMessageActionCreator = () => ({type:"SEND-MESSAGE"})
