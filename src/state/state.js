import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"
import FemalePhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png"

let rerenderTree = () =>{
  console.log(1);
}

const state = {
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
      addPost(){
        const text = this.postInputText;
        
        if (text) {
          
          this.postsData.unshift({
            name: "Ilya",
            surname: "Davydov",
            date: "25 Jan 2021",
            content: text,
            likesCount: 0,
            photo: MyPhoto
          })
          
          this.postInputText = "";
          rerenderTree(state);
        }
      },
      updatePostText(newText){
        this.postInputText = newText;
        rerenderTree(state);
      }
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
      updateInputMessage(newText){
        this.messageInputText = newText;
        rerenderTree(state);
      },
    },
    sendMessage(){
      let text = this.inputMessage.messageInputText.trim();
      if (text) {
        this.dialog.dialogMessages.push({
          name: "Self",
          content: text,
          photo: MyPhoto
        });
        this.inputMessage.messageInputText = "";
        rerenderTree(state);
      }
      this.scrollDown()
    },
    scrollDown(){
      const block = document.querySelector(".scroll_down")
      setTimeout(() => {
        block.scrollTop = block.scrollHeight + 100;
      }, 1);
    },
  },
}


export const subscribe = observer =>{
  rerenderTree = observer;
}

window.state = state; // удалить!

export default state;