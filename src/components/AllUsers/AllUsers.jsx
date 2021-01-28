import React from 'react';
import styles from './AllUsers.module.css';
import User from './User/User';
import MalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png';
import FemalePhoto from 'C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Female.png';


const AllUsers = (props) => {
  if (props.usersList.length === 0) {
    props.setUsers([
      {id: 1, isFollowed: true, name: 'Ivan', surname: 'Ivanov', status: 'Hello!', photo: MalePhoto},
      {id: 2, isFollowed: false, name: 'Vladimir', surname: 'Putin', status: 'Hello!', photo: MalePhoto},
      {id: 3, isFollowed: true, name: 'Margot', surname: 'Robbie', status: 'Hello!', photo: FemalePhoto},
    ]);
  }
  let usersList = props.usersList.map(user => {
    return <User isFollowed={user.isFollowed} name={user.name} surname={user.surname} id={user.id}
                 status={user.status} photo={user.photo} follow={props.follow} unfollow={props.unfollow}/>;
  });
  
  return (
    <div className={styles.users}>
      {usersList}
    </div>
  );
};

export default AllUsers;