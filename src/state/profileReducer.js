import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"

const profileReducer = (state, action) => {
  
  switch (action.type) {
    case "ADD-POST":
      const text = state.posts.postInputText.trim();
      
      if (text) {
        
        state.posts.postsData.unshift({
          name: "Ilya",
          surname: "Davydov",
          date: "25 Jan 2021",
          content: text,
          likesCount: 0,
          photo: MyPhoto
        })
        
        state.posts.postInputText = "";
      }
      break;
    
    
    case "UPDATE-POST-TEXT":
      state.posts.postInputText = action.newPostText;
      break;
    
    
    default:
      break;
  }
  return state;
}

export default profileReducer;