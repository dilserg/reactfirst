import userAPI from '../api/api';

let initialState = {
  users: [],
  selectedPage: 1,
  usersOnOnePage: 10,
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
    
    case 'TO-FIRST-PAGE':
      return {
        ...state,
        selectedPage: 1
      };
    
    default:
      return state;
  }
};

export default AllUsersReducer;

export const goToFirstPage = () => ({type: 'TO-FIRST-PAGE'});

export const followAC = (id) => ({type: 'FOLLOW', id});

export const unfollowAC = (id) => ({type: 'UNFOLLOW', id});

export const setUsers = (users) => ({type: 'SET-USERS', users});

export const getTotalUsersCount = (totalUsersCount) => ({type: 'GET-TOTAL-COUNT', totalUsersCount});

export const selectPage = (page) => ({type: 'SELECT-PAGE', page});

export const toggleFetching = (isFetching) => ({type: 'TOGGLE-FETCH', isFetching});

export const toggleFollowingProgress = (isFollowingProgress, id) => ({
  type: 'TOGGLE-FOLLOWING-PROGRESS',
  isFollowingProgress,
  id
});

export const getUsers = (selectedPage, usersOnOnePage) => {
  return async (dispatch) => {
    dispatch(toggleFetching(false));
    const response = await userAPI.getUsers(selectedPage, usersOnOnePage);
    dispatch(toggleFetching(true));
    dispatch(setUsers(response.data.items));
  };
};

export const getCount = () => {
  return async (dispatch) => {
    dispatch(toggleFetching(false));
    const response = await userAPI.getCount();
    dispatch(getTotalUsersCount(response.data.totalCount));
    dispatch(toggleFetching(true));
  };
};

export const unfollow = (id) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    const response = await userAPI.unfollow(id);
    if (response.data.resultCode === 0) {
      dispatch(unfollowAC(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export const follow = (id) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    const response = await userAPI.follow(id);
    if (response.data.resultCode === 0) {
      dispatch(followAC(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};