import userAPI from '../api/api';
import {Redirect} from 'react-router-dom';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuthorized: false,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'LOG-OUT':
      return {
        ...state,
        isAuthorized: false
      };
    
    case 'SET-USER-DATA':
      
      if (action.data.id) {
        return {
          ...state,
          ...action.data,
          isAuthorized: true
        };
      }
      return {
        ...state
      };
    
    case 'TOGGLE-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

const stateLogOut = () => ({type: 'LOG-OUT'});

const setUserData = (id, email, login) => ({type: 'SET-USER-DATA', data: {id, email, login}});

const toggleAuthFetching = isFetching => ({type: 'TOGGLE-FETCHING', isFetching});

export const authMe = () => {
  return (dispatch) => {
    userAPI.authMe()
      .then((response) => {
        const data = response.data.data;
        dispatch(setUserData(data.id, data.email, data.login));
      });
  };
};

export const LogIn = (data) => {
  return (dispatch) => {
    dispatch(toggleAuthFetching(true));
    userAPI.authLogin(data).then(() => {
        userAPI.authMe()
          .then((response) => {
            const data = response.data.data;
            dispatch(setUserData(data.id, data.email, data.login));
            dispatch(toggleAuthFetching(false));
          });
      }
    );
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(toggleAuthFetching(true));
    userAPI.LogOut().then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(stateLogOut());
        }
        dispatch(toggleAuthFetching(false));
      }
    );
  };
};


export default authReducer;