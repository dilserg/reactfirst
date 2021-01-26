import React from "react";
import styles from "./SidebarMessage.module.css"
import {NavLink} from "react-router-dom";

const SidebarMessage = (props) => {
  
  
  
  return (
    <NavLink onClick={()=>props.dispatch({type:"SCROLL-DOWN"})} activeClassName={styles.active} className={styles.link} to={`/dialogs/id${props.id}`}>
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