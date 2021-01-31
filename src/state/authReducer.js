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

export default authReducer;