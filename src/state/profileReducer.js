import MyPhoto from '../images/Male.png';
import userAPI from '../api/api';

const initialState = {
  info: {
    personInfo: {
      id: null,
      name: null,
      photo: MyPhoto,
    },
    status: ''
  },
  
  posts: {
    postsData: [],
    postInputText: '',
  },
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case 'ADD-POST':
      const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];
      let date = new Date();
      stateCopy = {...state};
      const text = action.postText.trim();
      if (text) {
        stateCopy.posts = {
          postsData: [{
            name: action.name,
            date: `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
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

export const addPost = (postText, name) => ({type: 'ADD-POST', postText, name});

export const setStatus = status => ({type: 'SET-STATUS', status});

const toggleProfileFetching = (isFetching) => ({type: 'TOGGLE-PROFILE-FETCHING', isFetching});

export const getProfile = (id) => async dispatch => {
  dispatch(toggleProfileFetching(true));
  const response = await userAPI.getProfile(id);
  if (response.data) {
    dispatch(setProfile(response.data));
    dispatch(toggleProfileFetching(false));
  }
};


export const getStatus = (id) => async dispatch => {
  const response = await userAPI.getStatus(id);
  dispatch(setStatus(response.data));
};


export const setNewStatus = (status) => {
  userAPI.setNewStatus(status);
};

export const editPage = (newData) => {
  const update = {
    userId:newData.id,
    lookingForAJob:Boolean(+newData.isLookingForJob),
    lookingForAJobDescription:newData.job,
    fullName:newData.name,
    contacts:{
      github:newData.github,
      vk:newData.vk,
      facebook:newData.facebook,
      instagram:newData.instagram,
      twitter:newData.twitter,
      youtube:newData.youtube,
      mainLink:newData.mainLink
    }
  }
  userAPI.editPage(update)
}
