import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  follow, getCount,
  getTotalUsersCount, getUsers,
  selectPage,
  setUsers,
  toggleFetching, toggleFollowingProgress,
  unfollow
} from '../../state/AllUsersReducer';
import User from './User/User';
import MalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import AllUsers from './AllUsers';
import {
  getFetchingInfo,
  getPagesList, getSelectedPage,
  getUsersInFollowingProgress,
  getUsersList, getUsersOnOnePageCount
} from '../../state/selectors/allUsersSelectors';
import {getAuthorizeInfo} from '../../state/selectors/authPageSelector';


const AllUsersContainer = props => {
  
  useEffect(()=>{
    props.getUsers(props.selectedPage, props.usersOnOnePage)
    props.getCount();
  },[props.selectedPage])
  
  console.log('render');
  let usersList = props.usersList.map(user => {
    return <User isFollowed={user.followed} name={user.name} surname={user.surname} id={user.id}
                 status={user.status} follow={props.follow} unfollow={props.unfollow}
                 photo={user.photos.small === null ? MalePhoto : user.photos.small}
                 toggleFollowingProgress={props.toggleFollowingProgress} isAuthorized={props.isAuthorized}
                 usersInFollowingProgress={props.usersInFollowingProgress}/>;
  });
  
  return <AllUsers usersList={usersList} selectedPage={props.selectedPage} selectPage={props.selectPage}
                   pagesList={props.pagesList} getUsers={props.getUsers} isFetching={props.isFetching}
                   usersOnOnePage={props.usersOnOnePage}/>;
};


const mapDispatchToProps = {
  toggleFollowingProgress,
  follow,
  unfollow,
  setUsers,
  getTotalUsersCount,
  selectPage,
  toggleFetching,
  getUsers,
  getCount,
};

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthorizeInfo(state),
    usersInFollowingProgress: getUsersInFollowingProgress(state),
    usersList: getUsersList(state),
    pagesList: getPagesList(state),
    selectedPage: getSelectedPage(state),
    isFetching: getFetchingInfo(state),
    usersOnOnePage: getUsersOnOnePageCount(state),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);


