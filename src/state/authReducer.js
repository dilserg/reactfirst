import userAPI from '../api/api';

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET-USER-DATA':
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export const setUserData = (id, email,login) => ({type:'SET-USER-DATA', data:{id,email,login}})

export const getData = () => {
    return (dispatch)=> {
      userAPI.authMe()
        .then((response) => {
          const data = response.data.data;
          dispatch(setUserData(data.id, data.email, data.login));
        });
    }
};

export default authReducer;