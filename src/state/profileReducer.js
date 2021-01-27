import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"

const initialState= {
  
    info:{
      personInfo: {
        name: "Ilya",
        surname: "Davydov",
        city: "Kaluga",
        age: 18,
        university: "MISIS"
      },
      
    },
    
    posts:{
      postsData: [
        {
          postID: 0,
          name: "Ilya",
          surname: "Davydov",
          date: "17 dec 2019",
          content: "Hello, World!",
          likesCount: 212,
          photo: MyPhoto,
        },
        {
          postID: 1,
          name: "Ilya",
          surname: "Davydov",
          date: "29 oct 2019",
          content: "How are you?",
          likesCount: 150,
          photo: MyPhoto,
        },
        {
          postID: 2,
          name: "Ilya",
          surname: "Davydov",
          date: "1 sep 2019",
          content: "Again...",
          likesCount: 53,
          photo: MyPhoto,
        },
      ],
      
      postInputText: "",
    }
  
}

const profileReducer = (state=initialState, action) => {
  let stateCopy = {...state}
  
  switch (action.type) {
    case "ADD-POST":
      stateCopy.posts.postsData = [...state.posts.postsData];
      
      const text = state.posts.postInputText.trim();
      if (text) {
        
        stateCopy.posts.postsData.unshift({
          name: "Ilya",
          surname: "Davydov",
          date: "25 Jan 2021",
          content: text,
          likesCount: 0,
          photo: MyPhoto
        })
        
        stateCopy.posts.postInputText = "";
      }
      return stateCopy;
    
    
    case "UPDATE-POST-TEXT":
      stateCopy.posts.postInputText = action.newPostText;
      return stateCopy;
      
    default:
      return state;
  }
}

export default profileReducer;