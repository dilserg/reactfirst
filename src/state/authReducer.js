import userAPI from '../api/api';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuthorized:false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET-USER-DATA':
      
      if (action.data.id){
        return {
          ...state,
          ...action.data,
          isAuthorized: true
        };
      }
      return {
        ...state
      };
    default:
      return state;
  }
};

const setUserData = (id, email,login) => ({type:'SET-USER-DATA', data:{id,email,login}})

export const authMe = () => {
    return (dispatch)=> {
      userAPI.authMe()
        .then((response) => {
          const data = response.data.data;
          dispatch(setUserData(data.id, data.email, data.login));
        });
    }
};

export const LogIn = (data) =>{
  return (dispatch)=>{
    userAPI.authLogin(data)
  }
}

export default authReducer;