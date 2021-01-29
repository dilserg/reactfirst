import React from 'react';
import {connect} from 'react-redux';
import AllUsers from './AllUsers';
import {followAC, getTotalUsersCountAC, selectPageAC, setUsersAC, unfollowAC} from '../../state/actionCreator';


const mapDispatchToProps = dispatch => {
  return {
    follow(id) {
      dispatch(followAC(id));
    },
    unfollow(id) {
      dispatch(unfollowAC(id));
    },
    setUsers(users) {
      dispatch(setUsersAC(users));
    },
    getTotalCount(totalUsersCount) {
      dispatch(getTotalUsersCountAC(totalUsersCount));
    },
    selectPage(page){
      dispatch(selectPageAC(page))
    }
  };
};

const mapStateToProps = state => {
  
  let pagesList = [];
  let pagesCount = Math.ceil(state.allUsers.totalUsersCount / 5);
  debugger
  for (let i = 1; i <= pagesCount; i++)
    pagesList.push(i);
  
  return {
    usersList: state.allUsers.users,
    pagesList,
    selectedPage: state.allUsers.selectedPage,
  };
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;