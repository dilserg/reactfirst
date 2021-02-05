import {authMe} from './authReducer';

let initialState = {
  isInitialized: false
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isInitialized: true,
      };
    
    default:
      return state;
  }
};

export default appReducer;

const initialize = () => ({type: 'INITIALIZE'});

export const initializeMe = () => {
  return async dispatch => {
    dispatch(authMe());
    dispatch(initialize());
  };
};