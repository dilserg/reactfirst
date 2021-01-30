export const addPostAC = () => ({type: 'ADD-POST'});

export const updatePostTextAC = newText => {
  return {
    type: 'UPDATE-POST-TEXT',
    newPostText: newText
  };
};

export const setProfileAC = (data) => ({type: 'SET-PROFILE',data});


export const updateInputMessageAC = newText => {
  return {
    type: 'UPDATE-INPUT-MESSAGE',
    newMessageText: newText
  };
};

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'});


export const follow = (id) => ({type: 'FOLLOW', id});

export const unfollow = (id) => ({type: 'UNFOLLOW', id});

export const setUsers = (users) => ({type: 'SET-USERS', users});

export const getTotalUsersCount = (totalUsersCount) => ({type: 'GET-TOTAL-COUNT', totalUsersCount});

export const selectPage = (page) => ({type: 'SELECT-PAGE', page});

export const toggleFetching = (isFetching) => ({type: 'TOGGLE-FETCH', isFetching});

