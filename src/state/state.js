import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"
import FemalePhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png"

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
    if (action.type ==="ADD-POST"){
      const text = this._state.profile.posts.postInputText.trim();
  
      if (text) {
    
        this._state.profile.posts.postsData.unshift({
          name: "Ilya",
          surname: "Davydov",
          date: "25 Jan 2021",
          content: text,
          likesCount: 0,
          photo: MyPhoto
        })
    
        this._state.profile.posts.postInputText = "";
        this._rerenderTree(this.getState());
      }
    }
    
    else if (action.type ==="UPDATE-POST-TEXT"){
      this._state.profile.posts.postInputText = action.newPostText;
      this._rerenderTree(this.getState());
    }
    
    else if (action.type ==="UPDATE-INPUT-MESSAGE"){
      this._state.dialogs.inputMessage.messageInputText = action.newMessageText;
      this._rerenderTree(this.getState());
    }
    
    else if (action.type ==="SEND-MESSAGE"){
      const text = this._state.dialogs.inputMessage.messageInputText.trim();
  
      if (text) {
        this._state.dialogs.dialog.dialogMessages.push({
          name: "Self",
          content: text,
          photo: MyPhoto
        });
    
        this._state.dialogs.inputMessage.messageInputText = "";
    
        this._rerenderTree(this.getState());
      }
      this.dispatch({type:"SCROLL-DOWN"})
    }
    
    else if (action.type ==="SCROLL-DOWN"){
      const block = document.querySelector(".scroll_down")
      setTimeout(() => {
        block.scrollTop = block.scrollHeight + 100;
      }, 1);
    }
    
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


window.store = store; // удалить!

export default store;