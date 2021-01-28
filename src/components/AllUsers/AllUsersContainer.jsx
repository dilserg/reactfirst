import React from 'react';
import {connect} from 'react-redux';
import AllUsers from './AllUsers';
import {followAC, setUsersAC, unfollowAC} from '../../state/actionCreator';

const mapDispatchToProps = dispatch => {
  return {
    follow(id) {
      dispatch(followAC(id));
    },
    unfollow(id) {
      dispatch(unfollowAC(id));
    },
    setUsers(users){
      dispatch(setUsersAC(users))
    }
  };
};

const mapStateToProps = state => {
  return {
    usersList: state.allUsers.users,
  };
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;