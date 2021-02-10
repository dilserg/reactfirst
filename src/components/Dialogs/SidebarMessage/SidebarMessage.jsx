import React from 'react';
import styles from './SidebarMessage.module.css';
import {NavLink} from 'react-router-dom';

const SidebarMessage = (props) => {
  const selectDialog = () =>{
    props.selectDialog(props.id)
    props.scrollDown()
  }
  
  return (
    <NavLink onClick={selectDialog} activeClassName={styles.active} className={styles.link}
             to={`/dialogs/id${props.id}`}>
      <div className={styles.message}>
        <div className={styles.name}>
          {props.name}
        </div>
        <div className={styles.content}>
          {props.content}
        </div>
      </div>
    </NavLink>
  );
};

export default SidebarMessage;