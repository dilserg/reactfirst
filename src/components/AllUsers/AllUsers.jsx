import React from 'react';
import styles from './AllUsers.module.css';
import User from './User/User';
import MalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import * as axios from 'axios';
import Pages from './Pages/Pages';


class AllUsers extends React.Component {
  
  getUsers = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=5`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  
  getCount = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.getTotalCount(response.data.totalCount);
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
    
    
    return (
      <div>
        <Pages selectedPage={this.props.selectedPage} selectPage={this.props.selectPage}
               pagesList={this.props.pagesList} getUsers={this.getUsers}/>
        <div className={styles.users}>
          {usersList}
        </div>
      </div>
    
    );
  };
}

export default AllUsers;
