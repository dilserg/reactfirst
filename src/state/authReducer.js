import userAPI from '../api/api';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuthorized: false,
  isFetching: false,
  hasError: false
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
    
    case 'HAS-ERROR':
      return {
        ...state,
        hasError: action.error
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

const hasError = (error) => ({type: 'HAS-ERROR', error});

const stateLogOut = () => ({type: 'LOG-OUT'});

const setUserData = (id, email, login) => ({type: 'SET-USER-DATA', data: {id, email, login}});

const toggleAuthFetching = isFetching => ({type: 'TOGGLE-FETCHING', isFetching});


export const authMe = () => async (dispatch) => {
  const response = await userAPI.authMe();
  const data = response.data.data;
  return dispatch(setUserData(data.id, data.email, data.login));
};


export const logIn = (data) => async dispatch => {
  dispatch(toggleAuthFetching(true));
  let response = await userAPI.authLogin(data);
  if (response.data.resultCode === 0) {
    response = await userAPI.authMe();
    const data = response.data.data;
    dispatch(setUserData(data.id, data.email, data.login));
    dispatch(hasError(false));
    dispatch(toggleAuthFetching(false));
  } else {
    dispatch(hasError(true));
    dispatch(toggleAuthFetching(false));
  }
};


export const logOut = () => async dispatch => {
  dispatch(toggleAuthFetching(true));
  const response = await userAPI.LogOut();
  if (response.data.resultCode === 0) {
    dispatch(stateLogOut());
  }
  dispatch(toggleAuthFetching(false));
  
};


export default authReducer;