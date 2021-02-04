import MyPhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import userAPI from '../api/api';
import {Redirect} from 'react-router-dom';

const initialState = {
  
  info: {
    personInfo: {
      id: null,
      name: null,
      surname: null,
      city: null,
      age: null,
      university: null,
      photo: MyPhoto
    },
    status: ''
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
  },
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case 'ADD-POST':
      stateCopy = {...state};
      const text = action.postText.trim();
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
    
    
    case 'SET-PROFILE':
      stateCopy = {...state};
      stateCopy.info.personInfo = {
        ...state.info.personInfo,
        name: action.data.fullName,
        photo: action.data.photos.large,
      };
      return stateCopy;
    
    
    case 'TOGGLE-PROFILE-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      };
    
    
    case 'SET-STATUS':
      return {
        ...state,
        info: {...state.info, status: action.status},
      };
    
    
    default:
      return state;
  }
};

export default profileReducer;

export const setProfile = (data) => ({type: 'SET-PROFILE', data});

export const addPostAC = (postText) => ({type: 'ADD-POST', postText});

export const setStatus = status => ({type: 'SET-STATUS', status});

const toggleProfileFetching = (isFetching) => ({type: 'TOGGLE-PROFILE-FETCHING', isFetching});

export const getProfile = (id) => dispatch => {
  dispatch(toggleProfileFetching(true));
  return userAPI.getProfile(id)
    .then((response) => {
      if (response.data) {
        dispatch(setProfile(response.data));
        dispatch(toggleProfileFetching(false));
      }
    });
};


export const getStatus = (id) => dispatch => {
  return userAPI.getStatus(id)
    .then((response) => {
      dispatch(setStatus(response.data));
    });
};


export const setNewStatus = (status) => {
  return userAPI.setNewStatus(status);
};