export const addPostAC = () => ({type: 'ADD-POST'});

export const updatePostTextAC = newText => {
  return {
    type: 'UPDATE-POST-TEXT',
    newPostText: newText
  };
};


export const updateInputMessageAC = newText => {
  return {
    type: 'UPDATE-INPUT-MESSAGE',
    newMessageText: newText
  };
};

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'});


export const followAC = (id) => ({type: 'FOLLOW', id});

export const unfollowAC = (id) => ({type: 'UNFOLLOW', id});

export const setUsersAC = (users) => ({type: 'SET-USERS', users});

export const getTotalUsersCountAC = (totalUsersCount) => ({type:'GET-TOTAL-COUNT',totalUsersCount})
