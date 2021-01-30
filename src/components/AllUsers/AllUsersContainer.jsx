import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  getTotalUsersCount,
  selectPage,
  setUsers,
  toggleFetching,
  unfollow
} from '../../state/actionCreator';
import * as axios from 'axios';
import User from './User/User';
import MalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import AllUsers from './AllUsers';


class AllUsersContainer extends React.Component {
  
  getUsers = () => {
    this.props.toggleFetching(false)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=5`)
      .then((response) => {
        this.props.toggleFetching(true)
        this.props.setUsers(response.data.items);
      });
  };
  
  getCount = () => {
    this.props.toggleFetching(false)
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.getTotalUsersCount(response.data.totalCount);
      this.props.toggleFetching(true)
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
                   photo={user.photos.small === null ? MalePhoto : user.photo}/>;
    });
    
    
    return <AllUsers usersList={usersList} selectedPage={this.props.selectedPage} selectPage={this.props.selectPage}
                     pagesList={this.props.pagesList} getUsers={this.getUsers} isFetching={this.props.isFetching}/>;
  };
}



const mapDispatchToProps =  {
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
    usersList: state.allUsers.users,
    pagesList,
    selectedPage: state.allUsers.selectedPage,
    isFetching: state.allUsers.isFetching
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (AllUsersContainer);

