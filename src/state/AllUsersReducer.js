
let initialState = {
  users:[]
};

const AllUsersReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case 'FOLLOW':
      stateCopy = {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id)
            return {...user, isFollowed: true};
          else
            return user;
        })
      };
      return stateCopy;
    
    
    case 'UNFOLLOW':
      stateCopy = {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id)
            return {...user, isFollowed: false};
          else
            return user;
        })
      };
      return stateCopy;
    
    
    case 'SET-USERS':
      return {...state,users: [...action.users] };
    
    default:
      return state;
  }
};


export default AllUsersReducer;