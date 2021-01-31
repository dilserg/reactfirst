import MyPhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';

const initialState = {
  
  info: {
    personInfo: {
      id:14502,
      name: null,
      surname: null,
      city: null,
      age: null,
      university: null,
      photo:MyPhoto
    },
    
  },
  
  posts: {
    postsData: [
      {
        postID: 0,
        name: 'Ilya',
        surname: 'Davydov',
        date: '17 dec 2019',
        content: 'Hello, World!',
        likesCount: 212,
        photo: MyPhoto,
      },
      {
        postID: 1,
        name: 'Ilya',
        surname: 'Davydov',
        date: '29 oct 2019',
        content: 'How are you?',
        likesCount: 150,
        photo: MyPhoto,
      },
      {
        postID: 2,
        name: 'Ilya',
        surname: 'Davydov',
        date: '1 sep 2019',
        content: 'Again...',
        likesCount: 53,
        photo: MyPhoto,
      },
    ],
    
    postInputText: '',
  }
  
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case 'ADD-POST':
      stateCopy = {...state};
      
      const text = state.posts.postInputText.trim();
      
      if (text) {
        stateCopy.posts = {
          postsData: [{
            name: 'Ilya',
            surname: 'Davydov',
            date: '25 Jan 2021',
            content: text,
            likesCount: 0,
            photo: MyPhoto
          }, ...state.posts.postsData], postInputText: ''
        };
      }
      return stateCopy;
    
    
    case 'UPDATE-POST-TEXT':
      stateCopy = {...state};
      stateCopy.posts.postInputText = action.newPostText;
      return stateCopy;
    
    case 'SET-PROFILE':
      stateCopy = {...state}
      stateCopy.info.personInfo = {
        ...state.info.personInfo,
        name: action.data.fullName,
        photo: action.data.photos.large,
      }
      return stateCopy;
    
    default:
      return state;
  }
};

export default profileReducer;