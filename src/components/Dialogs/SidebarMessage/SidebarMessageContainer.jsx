import React from "react";
import SidebarMessage from "./SidebarMessage";


const SidebarMessageContainer = (props) => {
  const scrollDown = () =>{
    props.store.dispatch({type:"SCROLL-DOWN"})
  }
  return <SidebarMessage name={props.name} content={props.content} id={props.id} scrollDown={scrollDown}/>
};

export default SidebarMessageContainer;