import {createSelector} from 'reselect';

const getTotalUsersCount = state => state.allUsers.totalUsersCount;

export const getUsersOnOnePageCount = state => state.allUsers.usersOnOnePage;

export const getPagesList = createSelector(getTotalUsersCount, getUsersOnOnePageCount,
  (usersCount, usersOnOnePage) => {
    let pagesList = [];
    let pagesCount = Math.ceil(usersCount / usersOnOnePage);
    for (let i = 1; i <= pagesCount; i++)
      pagesList.push(i);
    return pagesList;
  });

export const getUsersInFollowingProgress = state => state.allUsers.usersInFollowingProgress;

export const getUsersList = state => state.allUsers.users;

export const getSelectedPage = state => state.allUsers.selectedPage;

export const getFetchingInfo = state => state.allUsers.isFetching

