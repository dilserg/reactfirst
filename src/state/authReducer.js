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


export const authMe = () => (dispatch) => {
  return userAPI.authMe()
    .then((response) => {
      const data = response.data.data;
      dispatch(setUserData(data.id, data.email, data.login));
    });
};


export const LogIn = (data) => dispatch => {
  dispatch(toggleAuthFetching(true));
  return userAPI.authLogin(data).then((response) => {
      if (response.data.resultCode === 0) {
        userAPI.authMe().then((response) => {
          const data = response.data.data;
          dispatch(setUserData(data.id, data.email, data.login));
          dispatch(hasError(false));
          dispatch(toggleAuthFetching(false));
        });
      } else {
        dispatch(hasError(true));
        dispatch(toggleAuthFetching(false));
      }
    }
  );
};


export const logOut = () => dispatch => {
  dispatch(toggleAuthFetching(true));
  return userAPI.LogOut().then((response) => {
    debugger
      if (response.data.resultCode === 0) {
        dispatch(stateLogOut());
      }
      dispatch(toggleAuthFetching(false));
    }
  );
};


export default authReducer;