import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  getTotalUsersCount,
  selectPage,
  setUsers,
  toggleFetching, toggleFollowingProgress,
  unfollow
} from '../../state/AllUsersReducer';
import User from './User/User';
import MalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import AllUsers from './AllUsers';
import userAPI from '../../api/api';


class AllUsersContainer extends React.Component {
  
  getUsers = () => {
    this.props.toggleFetching(false);
    userAPI.getUsers(this.props.selectedPage)
      .then((response) => {
        this.props.toggleFetching(true);
        this.props.setUsers(response.data.items);
      });
  };
  
  getCount = () => {
    this.props.toggleFetching(false);
    userAPI.getCount()
      .then((response) => {
        this.props.getTotalUsersCount(response.data.totalCount);
        this.props.toggleFetching(true);
      });
  };
  
  componentDidMount() {
    this.getUsers();
    this.getCount();
  }
  
  
  render = () => {
    let usersList = this.props.usersList.map(user => {
      return <User isFollowed={user.followed} name={user.name} surname={user.surname} id={user.id}
                   status={user.status} follow={this.props.follow} unfollow={this.props.unfollow}
                   photo={user.photos.small === null ? MalePhoto : user.photo}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   usersInFollowingProgress={this.props.usersInFollowingProgress}/>;
    });
    
    
    return <AllUsers usersList={usersList} selectedPage={this.props.selectedPage} selectPage={this.props.selectPage}
                     pagesList={this.props.pagesList} getUsers={this.getUsers} isFetching={this.props.isFetching}/>;
  };
}


const mapDispatchToProps = {
  toggleFollowingProgress,
  follow,
  unfollow,
  setUsers,
  getTotalUsersCount,
  selectPage,
  toggleFetching,
};

const mapStateToProps = state => {
  
  let pagesList = [];
  let pagesCount = Math.ceil(state.allUsers.totalUsersCount / 5);
  for (let i = 1; i <= pagesCount; i++)
    pagesList.push(i);
  
  return {
    usersInFollowingProgress: state.allUsers.usersInFollowingProgress,
    usersList: state.allUsers.users,
    pagesList,
    selectedPage: state.allUsers.selectedPage,
    isFetching: state.allUsers.isFetching
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);

