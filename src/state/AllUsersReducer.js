import {getTotalUsersCountAC} from './actionCreator';

let initialState = {
  users:[],
  selectedPage:1,
};

const AllUsersReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case 'FOLLOW':
      stateCopy = {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id)
            return {...user, followed: true};
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
            return {...user, followed: false};
          else
            return user;
        })
      };
      return stateCopy;
    
    
    case 'SET-USERS':
      return {...state,users: action.users };
      
    case 'GET-TOTAL-COUNT':
      return {...state, totalUsersCount: action.totalUsersCount};
      
    case 'SELECT-PAGE':
      return {...state, selectedPage:action.page}
    
    default:
      return state;
  }
};


export default AllUsersReducer;