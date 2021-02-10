import MyPhoto from '../images/Male.png';
import userAPI from '../api/api';

const initialState = {
  info: {
    personInfo: {
      id: null,
      name: null,
      aboutMe:null,
      photo: MyPhoto,
    },
    lookingForAJob:false,
    lookingForAJobDescription:null,
    contacts:{
      github:null,
      vk:null,
      facebook:null,
      instagram:null,
      twitter:null,
      youtube:null,
      mainLink:null
    },
    status: ''
  },
  
  posts: {
    newPostID:0,
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
          newPostID:state.posts.newPostID + 1,
          postsData: [{
            postID:state.posts.newPostID,
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
      stateCopy.info = {
        ...state.info,
        personInfo:{
          ...state.info.personInfo,
          name: action.data.fullName,
          photo: action.data.photos.large,
          aboutMe:action.data.aboutMe,
        },
        lookingForAJob:action.data.lookingForAJob,
        lookingForAJobDescription:action.data.lookingForAJobDescription,
        contacts:{
          ...state.info.contacts,
          github:action.data.contacts.github,
          vk:action.data.contacts.vk,
          facebook:action.data.contacts.facebook,
          instagram:action.data.contacts.instagram,
          twitter:action.data.contacts.twitter,
          youtube:action.data.contacts.youtube,
          mainLink:action.data.contacts.mainLink
        },
      }
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
    
    case 'SET-NEW-PHOTO':
      return {
        ...state,
        info:{personInfo: {photo: action.photo}}
      }
      
    case 'DELETE-POST':
      return {
        ...state,
        posts:{
          ...state.posts,
          postsData: state.posts.postsData.filter((post) => post.postID !== action.postID)
        }
      }
    
    default:
      return state;
  }
};

export default profileReducer;

export const setProfile = (data) => ({type: 'SET-PROFILE', data});

export const addPost = (postText, name  ) => ({type: 'ADD-POST', postText, name});

export const setStatus = status => ({type: 'SET-STATUS', status});

const toggleProfileFetching = (isFetching) => ({type: 'TOGGLE-PROFILE-FETCHING', isFetching});

const setNewPhoto = (photo) => ({type:'SET-NEW-PHOTO', photo})

export const deletePost = (postID) => ({type:'DELETE-POST', postID})

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
    aboutMe:newData.aboutMe,
    lookingForAJob:Boolean(+newData.isLookingForJob),
    lookingForAJobDescription:newData.job,
    fullName:newData.name,
    contacts:{
      github:newData.github && 'github.com/'+newData.github,
      vk:newData.vk && 'vk.com/'+newData.vk,
      facebook:newData.facebook && 'facebook.com/'+newData.facebook,
      instagram:newData.instagram && 'instagram.com/'+newData.instagram,
      twitter:newData.twitter && 'twitter.com/'+newData.twitter,
      youtube:newData.youtube && 'youtube.com/'+newData.youtube,
      mainLink:newData.mainLink
    }
  }
  debugger
  userAPI.editPage(update)
}

export const uploadPhoto = (photoFile) => async dispatch =>{
  const response = await userAPI.uploadPhoto(photoFile)
  if(response.data.resultCode === 0){
    dispatch(setNewPhoto(response.data.data.photos.small))
  }
}
