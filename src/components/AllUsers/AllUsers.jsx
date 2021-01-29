import React from 'react';
import styles from './AllUsers.module.css';
import User from './User/User';
import MalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import FemalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png';
import * as axios from 'axios';


const AllUsers = (props) => {
  const getUsers = () => {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items)
        })
  }
  
  let usersList = props.usersList.map(user => {
    return <User isFollowed={user.followed} name={user.name} surname={user.surname} id={user.id}
                 status={user.status} follow={props.follow} unfollow={props.unfollow}
                 photo={user.photos.small===null? MalePhoto: user.photos.small}/>;
  });
  

  
  return (
    <div className={styles.users}>
      {usersList}
      <button className={styles.button} onClick={getUsers}>
        {usersList.length === 0 ? "Show users" : "Show more"}
      </button>
    </div>
  );
};

export default AllUsers;