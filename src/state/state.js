import MyPhoto from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"


let state = {
  personInfo:{
    name:"Ilya",
    surname:"Davydov",
    city:"Kaluga",
    age:18,
    university:"MISIS"
  },
  messages: [
    {id: 1, name: "Nadezhda", content: "Hello"},
    {id: 2, name: "Ivan", content: "Hello"},
    {id: 3, name: "Alexey", content: "Hello"},
    {id: 4, name: "Ekaterina", content: "Hello"},
    
  ],
  DialogMessages: [
    {name: "Nadezhda", content: "hello,friend!"},
    {name: "Self", content: "Hello!"},
    {name: "Nadezhda", content: "hello,friend!"},
    {name: "Self", content: "Hello!"},
    {name: "Nadezhda", content: "hello,friend!"},
    {name: "Self", content: "Hello!"},
    {name: "Nadezhda", content: "hello,friend!"},
    {name: "Self", content: "Hello!"},
    {name: "Nadezhda", content: "hello,friend!"},
    {name: "Self", content: "Hello!"},
    {name: "Nadezhda", content: "hello,friend!"},
    {name: "Self", content: "Hello!"},
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
  ]
}



export default state;