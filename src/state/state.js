import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"
import FemalePhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png"

let rerenderTree = () =>{
  console.log(1);
}

const state = {
  personInfo: {
    name: "Ilya",
    surname: "Davydov",
    city: "Kaluga",
    age: 18,
    university: "MISIS"
  },
  messages: [
    {id: 1, name: "Nadezhda", content: "Hello"},
    {id: 2, name: "Ivan", content: "Hello"},
    {id: 3, name: "Alexey", content: "Hello"},
    {id: 4, name: "Ekaterina", content: "Hello"},
  ],
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
  messageInputText: "",
}

export const addPost = () => {
  const text = state.postInputText;
  if (text) {
    state.postsData.unshift({
      name: "Ilya",
      surname: "Davydov",
      date: "25 Jan 2021",
      content: text,
      likesCount: 0,
      photo: MyPhoto
    })
    state.postInputText = "";
    rerenderTree(state);
  }
}

export const sendMessage = () => {
  let text = state.messageInputText.trim();
  if (text) {
    state.dialogMessages.push({
      name: "Self",
      content: text,
      photo: MyPhoto
    });
    state.messageInputText = "";
    rerenderTree(state);
    
  }
  scrollDown()
}

export const scrollDown = () => {
  const block = document.querySelector(".scroll_down")
  setTimeout(() => {
    block.scrollTop = block.scrollHeight + 100;
  }, 1);
}

export const showFull = () => {
  const button = document.querySelector(".info_full");
  if (button.classList.contains("info_hide")) {
    button.classList.remove("info_hide");
  } else {
    button.classList.add("info_hide");
  }
}

export const updatePostText = (newText) => {
  state.postInputText = newText;
  rerenderTree(state);
}

export const updateInputMessage = newText => {
  state.messageInputText = newText;
  rerenderTree(state);
}

export const subscribe = observer =>{
  rerenderTree = observer;
}

window.state = state; // удалить!

export default state;