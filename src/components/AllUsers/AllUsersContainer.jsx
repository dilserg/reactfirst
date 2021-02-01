import React from 'react';
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
import WithAuthRedirect from '../HOC/WithAuthRedirect';


class AllUsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.selectedPage, this.props.usersOnOnePage);
    this.props.getCount();
  }
  
  render = () => {
    let usersList = this.props.usersList.map(user => {
      return <User isFollowed={user.followed} name={user.name} surname={user.surname} id={user.id}
                   status={user.status} follow={this.props.follow} unfollow={this.props.unfollow}
                   photo={user.photos.small === null ? MalePhoto : user.photos.small}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   usersInFollowingProgress={this.props.usersInFollowingProgress}/>;
    });
    
    return <AllUsers usersList={usersList} selectedPage={this.props.selectedPage} selectPage={this.props.selectPage}
                     pagesList={this.props.pagesList} getUsers={this.props.getUsers} isFetching={this.props.isFetching}
                     usersOnOnePage={this.props.usersOnOnePage}/>;
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
  getUsers,
  getCount,
};

const mapStateToProps = state => {
  
  let pagesList = [];
  let pagesCount = Math.ceil(state.allUsers.totalUsersCount / state.allUsers.usersOnOnePage);
  for (let i = 1; i <= pagesCount; i++)
    pagesList.push(i);
  
  return {
    usersInFollowingProgress: state.allUsers.usersInFollowingProgress,
    usersList: state.allUsers.users,
    pagesList,
    selectedPage: state.allUsers.selectedPage,
    isFetching: state.allUsers.isFetching,
    usersOnOnePage: state.allUsers.usersOnOnePage,
  };
};


let WithRedirectAllUsersContainer = WithAuthRedirect(AllUsersContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithRedirectAllUsersContainer);

