import React from 'react';
import styles from './AllUsers.module.css';
import Pages from './Pages/Pages';
import Preloader from '../common/Preloader/Preloader';


const AllUsers = props =>{
  
    return (
      <div>
        <Pages selectedPage={props.selectedPage} selectPage={props.selectPage}
               pagesList={props.pagesList} getUsers={props.getUsers}/>
        <div className={styles.users}>
          {props.isFetching ? <div className={styles.preloader}><Preloader/></div> : props.usersList}
        </div>
      </div>
    
    );
  };

export default AllUsers;
