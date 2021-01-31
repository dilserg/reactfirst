let initialState = {
  users: [],
  selectedPage: 1,
  isFetching: false,
  usersInFollowingProgress: []
};

const AllUsersReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    
    case 'FOLLOW':
      stateCopy = {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return {...user, followed: true};
          } else
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
      return {...state, users: action.users};
    
    case 'GET-TOTAL-COUNT':
      return {...state, totalUsersCount: action.totalUsersCount};
    
    case 'SELECT-PAGE':
      return {...state, selectedPage: action.page};
    
    case 'TOGGLE-FETCH':
      return {...state, isFetching: !action.isFetching};
    
    case 'TOGGLE-FOLLOWING-PROGRESS':
      return {
        ...state,
        usersInFollowingProgress: action.isFollowingProgress
          ? [...state.usersInFollowingProgress, action.id]
          : state.usersInFollowingProgress.filter(id => id !== action.id)
      };
    
    default:
      return state;
  }
};



export const follow = (id) => ({type: 'FOLLOW', id});

export const unfollow = (id) => ({type: 'UNFOLLOW', id});

export const setUsers = (users) => ({type: 'SET-USERS', users});

export const getTotalUsersCount = (totalUsersCount) => ({type: 'GET-TOTAL-COUNT', totalUsersCount});

export const selectPage = (page) => ({type: 'SELECT-PAGE', page});

export const toggleFetching = (isFetching) => ({type: 'TOGGLE-FETCH', isFetching});

export const toggleFollowingProgress = (isFollowingProgress,id) =>({type:'TOGGLE-FOLLOWING-PROGRESS', isFollowingProgress, id})

export default AllUsersReducer;