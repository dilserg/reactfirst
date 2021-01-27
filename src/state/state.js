import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"
import FemalePhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png"
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
  _state:{
    profile:{
      info:{
        personInfo: {
          name: "Ilya",
          surname: "Davydov",
          city: "Kaluga",
          age: 18,
          university: "MISIS"
        },
        
        showFull(){
          const button = document.querySelector(".info_full");
          if (button.classList.contains("info_hide")) {
            button.classList.remove("info_hide");
          } else {
            button.classList.add("info_hide");
          }
        }
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
    },
    
    dialogs:{
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
    },
  },
  dispatch(action){
    this._state.dialogs = dialogsReducer(this._state.dialogs, action)
    this._state.profile = profileReducer(this._state.profile, action)
    this._rerenderTree(this.getState())
  },
  
  getState(){
    return this._state;
  },
  
  _rerenderTree(){
    console.log(1);
  },
  
  subscribe(observer){
    this._rerenderTree = observer;
  },
}

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

window.store = store; // удалить!

export default store;